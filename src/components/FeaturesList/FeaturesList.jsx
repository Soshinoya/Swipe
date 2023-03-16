import FeaturesItem from "../FeaturesItem/FeaturesItem"

const FeaturesList = ({ features, featuresListClass }) => {
    return (
        <div className={`glassmorphic-bg ${featuresListClass ? featuresListClass : ''}`}>
            {features.map((feature, i) => (
                <FeaturesItem {...feature} key={i} />
            ))}
        </div>
    )
}

export default FeaturesList
