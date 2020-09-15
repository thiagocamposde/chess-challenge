import request from '../util/request';

export const getNextMovements = async (piece, position) => {
  try {
    return await request.get(`/movements/${piece}/${position}`);
  } catch (err) {
    console.log(err.response.data);
    throw new Error(err.response.data[0].msg);
  }
};
