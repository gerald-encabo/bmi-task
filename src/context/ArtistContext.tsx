import { createContext, useState } from "react"
import { Artist, ArtistContextInterface, ArtistProvideProps } from "@/types/TypeLists";

const defaultState = {
    artist: {
        count: 0
    },
} as ArtistContextInterface

export const ArtistContext = createContext(defaultState);

export default function ArtistProvider({children} : ArtistProvideProps)
{
    const [artist, setArtist] = useState<Artist>({
        count: 0
    });

    return (
        <ArtistContext.Provider value={{artist, setArtist}}>
            {children}
        </ArtistContext.Provider>
    )
}