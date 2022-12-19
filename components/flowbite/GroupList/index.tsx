import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Group } from "@/types/Group";

type Props = {
  groups: Group[];
};

export const GroupList: React.FC<Props> = ({ groups }) => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {groups.map(({ id, name, imageUrl }) => (
        <li key={id} className="py-3 sm:py-4">
          <Link href={`/groups/${id}`}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="w-8 h-8 rounded-full"
                  src={imageUrl}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {name}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
