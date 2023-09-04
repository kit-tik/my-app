import { timeAgo } from '@/utils/timeMilliSec'
import Image from 'next/image'
import RefreshButton from './refresh-button'
import { User } from '@prisma/client'

export default async function Table({users}: {users: User[]}) {
  const startTime = Date.now();
  const duration = Date.now() - startTime;
  if (!users) return (
    <div className='bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full text-red-500'>
      Not found any users!
    </div>
  )
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <div
            key={user?.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-5">
              <Image
                src={user.image? user.image: "/userAvatar.png"}
                alt={user.name? user.name: "Unknown Name"}
                width={48}
                height={48}
                className="rounded-full ring-1 ring-gray-900/5"
              />
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              {user.isAdmin? <div  className="space-y-1 text-green-500">isAdmin: ✔ </div>:
              <div  className="space-y-1 text-red-500">isAdmin: ❌</div>}
            </div>
            <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
