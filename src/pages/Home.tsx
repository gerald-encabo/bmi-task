import ArtistDetailsSection from '@/components/ArtistDetailsSection'
import ArtistListSection from '@/components/ArtistListSection'
import ArtistProvider from '@/context/ArtistContext';
import ImplementData from '@/components/ImplementData';
import { artistList } from "@/assets/data"
import { ArtistDataType } from '@/types/TypeLists';

const Home = () => {

  return (
    <ArtistProvider>
      <div className='mainPage'>
        {
          artistList.map((lists: ArtistDataType, key: number) => (
            <div key={key}>
                <ImplementData data={lists} />
              </div>
            ))
          }
        <ArtistListSection />
        <ArtistDetailsSection />
      </div>
    </ArtistProvider>
  )
}

export default Home