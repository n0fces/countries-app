import { useAppDispatch } from 'store';
import { clearControls } from './controlsSlice';

export const useCleanup = () => {
	const dispatch = useAppDispatch();

	const cleanUp = () => dispatch(clearControls());

	return cleanUp;
};
