import { AxiosInstance } from "axios";

import { Feedback } from "@/types/feedbacks";
import { RequestError } from "@/types/error";

type ErrorType = RequestError | null;

type Create = {
  data: Feedback;
  errors: ErrorType;
};

type CreatePayload = {
  type: string;
  text: string;
  fingerprint: string;
  device: string;
  page: string;
  apiKey: string;
};

export interface IFeedbackService {
  create: (payload: CreatePayload) => Promise<Create>;
}

function FeedbacksService(httpCliente: AxiosInstance): IFeedbackService {
  const create = async (payload: CreatePayload): Promise<Create> => {
    const response = await httpCliente.post<Feedback>("/feedbacks", payload);
    let errors: ErrorType = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return {
      data: response.data,
      errors,
    };
  };

  return {
    create,
  };
}

export default FeedbacksService;
