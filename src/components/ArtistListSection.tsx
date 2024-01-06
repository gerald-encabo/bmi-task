import "@/styles/artist-list-section.scss";
import "@/styles/artist-section.scss"
import { useState, useContext, useEffect } from "react";
import Title from "@/components/Title";
import Button from "@/components/Button";
import AddArtistForm from "./AddArtistForm";
import { useDispatch } from "react-redux";
import { listActions } from '@/redux/ArtistList';
import { ArtistContext } from '@/context/ArtistContext';
import { useSelector } from 'react-redux';
import { ArtistDataType, RootState } from "@/types/TypeLists"
import ArtistCard from "@/components/ArtistCard"

const ArtistListSection = () => {

  const artistList = useSelector((state: RootState) => state.list.artistList)

  const [count, setCount]: any = useState<number>(0);
  const [match, setMatch]: any = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const {setArtist} = useContext(ArtistContext);

  const dispatch = useDispatch();

  const deleteArtist = () => {
    dispatch(listActions.deleteArtist(match))
  }

  useEffect(() => {
    setArtist({
      count: count
    })
  }, [count])

  return (
    <>
      <section className="artist-list">
        <Title heading="Artist List Section" />
        <div className="artist-list-wrapper">
          <div className="artist-section">
            {
                artistList.map((lists: ArtistDataType, key: number) => (
                    <div
                      key={key} 
                      onClick={() => { 
                        setCount(key)
                        setMatch(lists.id)
                      }}
                      className={`artist-section-wrapper ${ key === count ? 'active' : "" }`}
                    >
                      <Title heading="Artist Section" />
                      <ArtistCard data={lists}/>
                    </div>
                ))
            }
         </div>
        </div>
        <div className="artist-list-btn">
          <div onClick={() => setOpen(!open)}>
            <Button button="Add Artist" />
          </div>
          <div onClick={deleteArtist}>
            <Button button="Remove Artist" />
          </div>
        </div>
      </section>
      {
        open ? (
          <AddArtistForm 
            setOpen={setOpen}
          />
        ) : null
      }
    </>
  )
}

export default ArtistListSection