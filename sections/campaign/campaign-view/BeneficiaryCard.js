import CustomCard from '../../../components/card/CustomCard';

function BeneficiaryCard({ campaign }) {
    const { title } = campaign
    return (
        <CustomCard>
            <p className="lead font-weight-normal text-wrap mt-2">
                <span className="badge  mr-2">Beneficiary:</span>
                {title}
            </p>
        </CustomCard>
    )
}

export default BeneficiaryCard