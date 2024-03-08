import { useInfiniteQuery } from "react-query";
import UserCard, { UserData } from "./UserCard";
import React, { FC } from "react";
import Loader from "../common/Loader";
import FailedAlert from "../common/FailedAlert";

const PAGE_SIZE = 6;

const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageParam}&count=${PAGE_SIZE}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

const UsersList: FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery("users", fetchUsers, {
      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.total_pages
          ? lastPage.page + 1
          : undefined;
      },
    });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <FailedAlert />;
  }

  return (
    <section className="mb-[140px]">
      <div className="container flex flex-col items-center">
        <h2 className="h1 mb-[50px] text-center">Working with GET request</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-full mb-[50px]">
          {data &&
            data.pages.map((pageData, i) => (
              <React.Fragment key={i}>
                {pageData.users.map((user: UserData) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    position={user.position}
                    position_id={user.position_id}
                    registration_timestamp={user.registration_timestamp}
                    photo={user.photo}
                  />
                ))}
              </React.Fragment>
            ))}
        </div>
        {hasNextPage && (
          <button className="btn-primary" onClick={() => fetchNextPage()}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default UsersList;
