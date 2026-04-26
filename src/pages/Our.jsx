import OurHero from "../components/Our/OurHero/OurHero";
import OurMain from "../components/Our/OurMain/OurMain";
import OurSecond from "../components/Our/OurSecond/OurSecond";
import OurValues from "../components/Our/OurValues/OurValues";
import OurStats from "../components/Our/OurStats/OurStats";
import OurCTA from "../components/Our/OurCTA/OurCTA";
import Section from '../components/Common/Section/Section'


function Our() {
    return (  
        <>
            <OurHero/>
            <Section> 
                <OurMain/>
            </Section>
            <OurStats/>
            <OurValues/>
            <Section> 
                <OurSecond/>
            </Section>
            <OurCTA/>
        </>
    );
}

export default Our;