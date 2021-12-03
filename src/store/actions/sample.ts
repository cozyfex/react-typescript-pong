import {
  SampleActionTypes,
  SampleFailureInterface,
  SampleRequestInterface,
  SampleSuccessInterface,
  SetSampleInterface,
  SetSampleNameInterface,
} from '../interfaces/sample/sample.actions.interfaces';
import { SampleStateInterface, TvShowContentInterface } from '../interfaces/sample/sample.interfaces';

export const setSampleAction = (
  data: SampleStateInterface,
): SetSampleInterface => ({
  type: SampleActionTypes.SET_SAMPLE,
  data,
});

export const setSampleName = (data: string): SetSampleNameInterface => ({
  type: SampleActionTypes.SET_SAMPLE_NAME,
  data,
});

export const sampleRequestAction = (data: string): SampleRequestInterface => ({
  type: SampleActionTypes.REQUEST,
  data,
});

export const sampleSuccessAction = (
  data: TvShowContentInterface[],
): SampleSuccessInterface => ({
  type: SampleActionTypes.SUCCESS,
  data,
});

export const sampleFailureAction = (data: string): SampleFailureInterface => ({
  type: SampleActionTypes.FAILURE,
  data,
});
