import { ArtistCardType, ArtistDataType } from '@/types/TypeLists'
import "@/styles/artist-card.scss"

const ArtistCard = ({data}: ArtistCardType) => {

  const { id, name, nationality, age  } = data as ArtistDataType;

  return (
    <div className='artist-card'>
        <div className='artist-card-details' key={id}>
            <p><b>Name:</b> {name} </p>
            <p><b>Nationality:</b> {nationality} </p>
            <p><b>Age:</b> {age} </p>
        </div>

    </div>
  )
}

export default ArtistCard