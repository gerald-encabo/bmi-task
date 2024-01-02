import { ArtistCardType, ArtistDataType } from '@/types/TypeLists'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { listActions } from '@/redux/ArtistList';


const ImplementData = ({data}: ArtistCardType ) => {

    const dispatch = useDispatch();
    const { id, name, nationality, age, songs } = data as ArtistDataType;

    useEffect(() => {
      dispatch(
        listActions.addArtist({
            id,
            name,
            nationality,
            age,
            songs
        })
      )
    }, [data])

  return (<></>)
}

export default ImplementData