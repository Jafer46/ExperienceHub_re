import DataTable from '@/components/DataTable'
import { RoleColumns } from './components/RoleColumnDef'
import { roles } from '@/constants/fakedata'

export default function RoleManagement () {
  return <DataTable data={roles} columns={RoleColumns} />
}
