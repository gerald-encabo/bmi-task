import "@/styles/artist-details-section.scss";
import Title from "@/components/Title";
import { ArtistDataType, SongsTypes, RootState } from "@/types/TypeLists";
import { PiArrowSquareIn } from "react-icons/pi";
import { useState, useContext } from "react";
import { ArtistContext } from '@/context/ArtistContext';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ArtistDetailsSection = () => {

  const artistList = useSelector((state: RootState) => state.list.artistList)
  const [changeLyrics, setChangeLyrics] = useState<number>(1);
  const {artist} = useContext(ArtistContext);

  const searchArtist = artistList.filter((list: any, key: number) => {
    if (key === artist.count) {
      return list
    }
    return false;
  })

  return (
    <section className="artist-details">
      <Title heading="Artist Details Section" />
      
      <div className="artist-details-control">
        <select
          className="artist-details-select"
          onChange={(e) => setChangeLyrics(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <div className="icon">
          <Link 
            to={`/artist-music-details/${artist.count}`}
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <PiArrowSquareIn />
          </Link>
        </div>
      </div>
      {
        searchArtist.map((lists: ArtistDataType) => (
            lists.songs.map((list: SongsTypes, key: number) => (
              changeLyrics === list.songNum ? (
                <div key={key}>
                  <div className="artist-details-lyrics">
                      <Title heading={`song title ${changeLyrics} lyrics`} />
                      <div className="artist-details-lyrics-card">
                        <p><b>Title:</b> {list.songTitle}</p>
                        <p><b>Lyrics:</b> {list.songLyrics}</p>
                      </div>
                  </div>
                  <div className="artist-details-info">
                    <Title heading={`song title ${changeLyrics} details`} />
                    <div className="artist-details-info-card">
                      <p><b>Composer:</b> {list.composer}</p>
                      <p><b>Producer:</b> {list.producer}</p>
                      <p><b>Production Date:</b> {list.productionDate}</p>
                      <p><b>Awards:</b> {list.awards}</p>
                    </div>
                  </div>
                </div>
              ) : null
            ))
        )) 
      }
    </section>
  )
}

export default ArtistDetailsSection