export enum ErrorMessage {
  Review = 'The review text must contain from 50 to 300 characters.',
  Rating = 'The rating must be chosen',
  NoError = ''
}

export enum FormFieldType {
  Review = 'review',
  Rating = 'rating'
}

export interface OfferFormData {
  review: string;
  rating: null | number;
}

export interface OfferErrorData {
  review: ErrorMessage.Review | ErrorMessage.NoError;
  rating: ErrorMessage.Rating | ErrorMessage.NoError;
}

export enum ReviewLength {
  Min = 50,
  Max = 300
}
