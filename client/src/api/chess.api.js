import request from '../util/request';

export const getNextMovements = async (piece, position) => {
  try {
    return await request.get(`/movements/${piece}/${position}`);
  } catch (err) {
    const { msg, value } = err.response.data[0];
    throw new Error(`${msg}: ${value}`);
  }
};
