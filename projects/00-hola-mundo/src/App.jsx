import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing={false} userName="francamposamoedo" name="Francisco Campos Amoedo" />
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing userName="goncy" name="Gonzalo Pozzo" />
        </section>
    )
}
