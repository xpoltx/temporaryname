import React from 'react'
import UserHeader from '../../components/UserHeader'
import UpdateRecordTable from '../../components/ProfComp/UpdateRecordTable'
import { useParams } from 'react-router-dom';

const RecordBookUpdPage = () => {
    const { disciplineId, studentId } = useParams();
    return (
    <div>
        <UserHeader/>
        <UpdateRecordTable disciplineId={disciplineId} studentId={studentId} />
    </div>
  )
}

export default RecordBookUpdPage