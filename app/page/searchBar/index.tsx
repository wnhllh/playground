import { Input, Link } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-70">
      <div className="flex flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 w-3/5 bg-black bg-opacity-70">
        <Input
          placeholder="Describe your front-end..."
          labelPlacement="outside"
          className="bg-black bg-opacity-70 text-white placeholder-gray-400"
          endContent={
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
                className="shrink-0 h-4 w-4 text-gray-600"
                fill="currentColor"
              >
                <path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h379q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-378q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v378q0 24.75-17.62 42.37Q804.75-120 780-120zm520-579h-51q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h51v-51q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v51h51q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-51v51q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37zM449-307l-82-108q-5-6-12-6t-12 6l-84 109q-6 8-1.5 16t13.5 8h419q8.5 0 12.75-8t-.75-16L588-458q-5-6-12-6t-12 6zm31-173"></path>
              </svg>
            </Link>
          }
        />
      </div>
    </div>
  );
}
