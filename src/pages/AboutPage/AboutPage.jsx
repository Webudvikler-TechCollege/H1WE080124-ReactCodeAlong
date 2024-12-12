import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"

export const AboutPage = () => {

    const description = "Her kan du læse hvem vi er og hvad vi står for"

    return (
        <ContentWrapper title="Om os" subtitle={description} description={description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam aspernatur soluta, officiis ipsum consequuntur itaque, magni minus nam animi enim, eveniet eum saepe. Nihil dicta ratione atque aliquam quas!</p>
        </ContentWrapper>
    )
}