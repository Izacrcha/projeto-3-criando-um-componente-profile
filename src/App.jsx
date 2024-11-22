import Profile from './components/Profile'

export default function App(){
  return(
    <div>
      <Profile 
        avatar={'../../public/izac.jpg'}
        name={'Izac Rocha'}
        bio={'Nutricionista'}
        email={'izacrocha1@gmail.com'}
        phone={'+55 85 99276-6743'}
        githubUrl={'https://github.com/izacrcha'}
        instagramUrl={'https://instagram.com/izacr__'}
      />
    </div>
  )
}