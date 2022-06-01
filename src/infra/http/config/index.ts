import axios, { AxiosError } from 'axios';
import * as Settings from '@src/server/settings';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
  RequestTimeoutException,
  HttpStatus,
  BadGatewayException,
  ForbiddenException,
  GatewayTimeoutException,
  MethodNotAllowedException,
  NotAcceptableException,
  PayloadTooLargeException,
  UnauthorizedException,
  InternalServerErrorException
} from '@nestjs/common';

type AppError = {
  message: string;
  error: string;
  statusCode: number;
};

function transporterErrorInstance(error?: AppError) {
  switch (error?.statusCode) {
    case HttpStatus.BAD_REQUEST:
      throw new BadRequestException(error.message);

    case HttpStatus.NOT_FOUND:
      throw new NotFoundException(error.message);

    case HttpStatus.REQUEST_TIMEOUT:
      throw new RequestTimeoutException(error.message);

    case HttpStatus.CONFLICT:
      throw new ConflictException(error.message);

    case HttpStatus.BAD_GATEWAY:
      throw new BadGatewayException(error.message);

    case HttpStatus.FORBIDDEN:
      throw new ForbiddenException(error.message);

    case HttpStatus.GATEWAY_TIMEOUT:
      throw new GatewayTimeoutException(error.message);

    case HttpStatus.METHOD_NOT_ALLOWED:
      throw new MethodNotAllowedException(error.message);

    case HttpStatus.NOT_ACCEPTABLE:
      throw new NotAcceptableException(error.message);

    case HttpStatus.PAYLOAD_TOO_LARGE:
      throw new PayloadTooLargeException(error.message);

    case HttpStatus.UNAUTHORIZED:
      throw new UnauthorizedException(error.message);

    default:
      throw new InternalServerErrorException(error?.message);
  }
}

function responseErrorInterceptor(error: AxiosError<AppError>) {
  return Promise.reject(transporterErrorInstance(error.response?.data));
}

const httpClient = axios.create({
  baseURL: Settings.EXTERNAL_SERVICES,
  timeout: Settings.EXTERNAL_TIMEOUT
});

httpClient.interceptors.response.use(response => response, responseErrorInterceptor);

export { httpClient };
