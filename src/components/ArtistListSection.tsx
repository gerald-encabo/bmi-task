import "@/styles/artist-list-section.scss";
import { useState, useContext } from "react";
import Title from "@/components/Title";
import Button from "@/components/Button";
import ArtistSection from "@/components/ArtistSection";
import AddArtistForm from "./AddArtistForm";
import { useDispatch } from "react-redux";
import { listActions } from '@/redux/ArtistList';
import { ArtistContext } from '@/context/ArtistContext';

const ArtistListSection = () => {

  const [open, setOpen] = useState<boolean>(false);
  const { artist }: any = useContext(ArtistContext);

  const dispatch = useDispatch();

  const deleteArtist = () => {
    dispatch(listActions.deleteArtist(artist.count))
  }

  return (
    <>
      <section className="artist-list">
        <Title heading="Artist List Section" />
        <div className="artist-list-wrapper">
          <ArtistSection />
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