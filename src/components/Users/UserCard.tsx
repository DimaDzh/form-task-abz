type UserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
};

export default function UserCard({
  email,
  name,
  phone,
  photo,
  position,
}: UserData) {
  return (
    <section className="flex flex-col items-center text-center p-5 bg-white overflow-hidden hover:scale-105 transition-all rounded-lg shadow-sm">
      <div className="size-12 mb-5 rounded-full">
        <img src={photo} alt={name} className="w-full h-full rounded-full" />
      </div>
      <div className="">
        <p className="p1 mb-5">{name} </p>
        <div className="flex flex-col">
          <p className="p1">{position}</p>
          <p className="p1">{email}</p>
          <p className="p1">{phone}</p>
        </div>
      </div>
    </section>
  );
}

export type { UserData };
