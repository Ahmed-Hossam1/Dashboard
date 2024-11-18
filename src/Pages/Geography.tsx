import Geography from "../components/Geography/Geography"
import PageHeadingText from "../components/PageHeadingText/PageHeadingText"

const GeographyPage = () => {
  return (
    <div className="h-[79vh]">
        <PageHeadingText h1="Geography" paragraph="simple Geography Chart"/>
        <Geography />
    </div>
  )
}

export default GeographyPage