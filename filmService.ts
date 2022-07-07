import { Model } from 'sequelize/types';
import Film, { FilmInput, FilmOutInput } from '../models/filmModel';
import * as repository from '../repositories/filmRepository';

export const getAll = async (): Promise<FilmOutInput[]> => {
    return await repository.getAll();
};
export const getById = async (id: number): Promise<FilmInput> => {
    return await repository.getById(id);
};
export const create = async (payload: FilmInput): Promise<FilmOutInput> => {
    return await repository.create(payload);
};
export const updateById = async (id: number, payload: FilmInput) => {
    return await repository.updateById(id,payload)
};
export const deleteById = async (id:number): Promise<void> => {
    await repository.deleteById(id);
}
