import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux';

export const useAppDispatch = () => useDispatch(AppDispatch);
export const useAppSelector = useSelector;