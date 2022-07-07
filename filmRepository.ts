import model, { FilmInput, FilmOutInput } from "../models/filmModel";

export const getAll = (): Promise<FilmOutInput[]> => {
  return model.findAll();
};

export const getById = async (id: number): Promise<FilmOutInput> => {
  const film = await model.findByPk(id);

  if (!film) {
    throw new Error("Registro não encontrado");
  }

  return film;
};
export const create = async (payload: FilmInput): Promise<FilmOutInput> => {
  return await model.create(payload);
};
export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutInput> => {
    const film = await model.findByPk(id);
    if (!film) {
        throw new Error("Registro não encontrado");
      }
  return await film.update(payload)
};
export const deleteById = async (id: number): Promise<void> => {
  const film = await model.findByPk(id);

  if (!film) {
    throw new Error('Registro não encontrado');
  }
  return await film.destroy();
}