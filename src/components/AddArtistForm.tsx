import "@/styles/add-artist-form.scss"
import Button from "./Button"
import { AddArtistType, RootState } from "@/types/TypeLists"
import { useDispatch } from "react-redux";
import { listActions } from '@/redux/ArtistList';
import { useState } from "react";
import { useSelector } from 'react-redux';

const AddArtistForm = ({setOpen}: AddArtistType) => {

  const totalCount = useSelector((state: RootState) => state.list.totalList)

  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    age: 0
  })
  const { name, nationality, age } = formData;

  const dispatch = useDispatch();

  const addArtist = () => {
    if (name !== "" && nationality !== "" && age !== 0) {
        dispatch(
            listActions.addArtist({
                id: totalCount,
                name: name,
                nationality: nationality,
                age: age,
                songs: []
            })
            )
        setOpen?.(!open)
    }
  }

  const updateState = (e: any) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="add-artist-form">
        <div className="add-artist-form-container">
            <h1>Artist Addition Form</h1>
            <div className="add-artist-form-input">
                <div className="add-artist-form-label">
                    <label>
                        Name: 
                        <input 
                            type="text" 
                            name="name" 
                            onChange={updateState}
                            required
                        />
                    </label>
                    <label>
                        Nationality: 
                        <input 
                            type="text" 
                            name="nationality"                             
                            onChange={updateState}
                            required
                        />
                    </label>
                    <label>
                        Age: 
                        <input 
                            type="number" 
                            name="age" 
                            onChange={updateState}
                            required
                        />
                    </label>
                </div>
            </div>
            <div className="add-artist-form-btn">
                <div onClick={addArtist}>
                    <Button button="Add" />
                </div>
                <div onClick={ () => setOpen?.(!open) }>
                    <Button button="Cancel" />            
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddArtistForm