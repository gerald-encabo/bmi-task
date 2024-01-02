import "@/styles/artist-section.scss"
import Title from "@/components/Title"
import { ArtistDataType, RootState } from "@/types/TypeLists"
import ArtistCard from "@/components/ArtistCard"
import { useContext, useEffect, useState } from "react";
import { ArtistContext } from '@/context/ArtistContext';
import { useSelector } from 'react-redux';

const ArtistSection = () => {

  const [count, setCount] = useState<number>(0);
  const {setArtist} = useContext(ArtistContext);

  const artistList = useSelector((state: RootState) => state.list.artistList)

  useEffect(() => {
    setArtist({
      count: count
    })
  }, [count])

  return (
    <div className="artist-section">
        {
            artistList.map((lists: ArtistDataType, key: number) => (
                <div
                  key={key} 
                  onClick={() => { setCount(key) }}
                  className={`artist-section-wrapper ${ key === count ? 'active' : "" }`}
                >
                  <Title heading="Artist Section" />
                  <ArtistCard data={lists} />
                </div>
            ))
        }
    </div>
  )
}

export default ArtistSection