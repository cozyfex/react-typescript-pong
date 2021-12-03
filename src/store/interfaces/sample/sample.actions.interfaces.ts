import { SampleStateInterface, TvShowContentInterface } from './sample.interfaces';

export enum SampleActionTypes {
  SET_SAMPLE = 'SET_SAMPLE',
  SET_SAMPLE_NAME = 'SET_SAMPLE_NAME',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface SetSampleInterface {
  type: SampleActionTypes.SET_SAMPLE;
  data: SampleStateInterface;
}

export interface SetSampleNameInterface {
  type: SampleActionTypes.SET_SAMPLE_NAME;
  data: string;
}

export interface SampleRequestInterface {
  type: SampleActionTypes.REQUEST;
  data: string;
}

export interface SampleSuccessInterface {
  type: SampleActionTypes.SUCCESS;
  data: TvShowContentInterface[];
}

export interface SampleFailureInterface {
  type: SampleActionTypes.FAILURE;
  data: string;
}

export type SampleActions =
  | SetSampleInterface
  | SetSampleNameInterface
  | SampleRequestInterface
  | SampleSuccessInterface
  | SampleFailureInterface;
