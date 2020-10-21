/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import FileUpLoader from 'react-firebase-file-uploader';
import {
  Section, ContainerImg, Img, Title,
} from '../../../public/styles/stylesEditUser';

import { Button3 } from '../../../public/styles/stylesButtons';

import { useStateFirebase } from '../../../firebase/context';

import Layout from '../../../components/Layout/index';


const UserProfile = () => {
  const Router = useRouter();
  // context values
  const { firebase, user } = useStateFirebase();
  // evitar error de pre render => null
  let nameUser = 'Nombre de Usuario';
  let userImg;
  if (user) {
    nameUser = user ? user.displayName : nameUser;
    userImg = user ? user.photoURL : '';
  }

  // state images dependency firestore
  const [imageName, setImageName] = useState('');
  const [goingUp, setGoingUp] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState('');


  // métodos FileUpLoader
  const handleUploadStart = () => {
    setProgress(0);
    setGoingUp(true);
  };

  const handleProgress = (Progress) => setProgress({ Progress });

  const handleUploadError = (error) => {
    setGoingUp(error);
    console.error(error);
  };

  const handleUploadSuccess = (name) => {
    setProgress(100);
    setGoingUp(false);
    setImageName(name);
    firebase
      .storage
      .ref('photos')
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setUrlImage(url);
      });
  };

  async function updateDataUser() {
    if (!user) {
      Router.push('/');
    } else {
      try {
        await user.updateProfile({
          photoURL: urlImage,
        });

        Router.push('/');
      } catch (error) {
        console.log('Hubo un error al actualizar la imágen');
      }
    }
  }


  // Proteger página de usuarios no autenticados

  const [isAuth, setIsAuth] = useState(false);
  setTimeout(() => {
    if (!user) {
      setIsAuth(true);
    }
  }, 0);

  useEffect(() => {
    if (!user && isAuth) {
      Router.push('/');
    }
  }, [user]);

  if (!user) return null;

  return (
    <Layout
      title={nameUser}
      description={`Editar perfil de ${nameUser}`}
      keywords="Profile, Edit"
    >

      <Section>
        <Title>{nameUser}</Title>
        <ContainerImg>
          <Img src={userImg} alt="Foto de perfil" />
        </ContainerImg>
        <FileUpLoader
          accept="image/*"
          id="imagen"
          name="imagen"
          randomizeFilename
          storageRef={firebase.storage.ref('photos')}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccess}
          onProgress={handleProgress}
        />
        {urlImage && (
        <div>
          <Button3
            type="button"
            background="#d00f0f"
            color="white"
            height="2rem"
            width="10rem"
            onClick={updateDataUser}
          >
            Actualizar
          </Button3>
        </div>
        )}
      </Section>
    </Layout>
  );
};

export default UserProfile;
