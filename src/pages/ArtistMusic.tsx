import "@/styles/artist-music.scss";
import Title from "@/components/Title";
import { useParams } from "react-router-dom";
import { ArtistDataType, SongsTypes, RootState } from "@/types/TypeLists";
import { PiArrowSquareIn } from "react-icons/pi";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ArtistMusic = () => {

  const artistList = useSelector((state: RootState) => state.list.artistList)
  const [changeLyrics, setChangeLyrics] = useState<number>(1);
  const { artistId } = useParams();

  const searchArtist = artistList.filter((list: any, key: number) => {
    if (key === Number(artistId)) {
      return list
    }
    return false;
  })

  return (
    <section className="artist-music">
      <Title heading="Artist Details Section" />
      
      <div className="artist-music-control">
        <select
          className="artist-music-select"
          onChange={(e) => setChangeLyrics(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <div className="icon">
          <Link to={`/artist-music-details/${artistId}`}>
            <PiArrowSquareIn />
          </Link>
        </div>
      </div>
      {
        searchArtist.map((list: ArtistDataType) => (
            list.songs.map((list: SongsTypes, key: number) => (
              changeLyrics === list.songNum ? (
                <div key={key}>
                  <div className="artist-music-lyrics">
                      <Title heading={`song title ${changeLyrics} lyrics`} />
                      <div className="artist-music-lyrics-card">
                        <p><b>Title:</b> {list.songTitle}</p>
                        <p><b>Lyrics:</b> {list.songLyrics}</p>
                      </div>
                  </div>
                  <div className="artist-music-info">
                    <Title heading={`song title ${changeLyrics} details`} />
                    <div className="artist-music-info-card">
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

export default ArtistMusic