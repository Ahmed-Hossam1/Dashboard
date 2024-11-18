import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
import { DataContacts } from "../data/data";

const ContactPage = () => {
  return (
    <div className="contact">
      <PageHeadingText h1="contact" paragraph="List of Contacts for Future Reference"/>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-secondaryColor text-gray-300 uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                register id
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                phone number
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                address
              </th>
              <th scope="col" className="px-6 py-3">
                city
              </th>
              <th scope="col" className="px-6 py-3">
                zip code
              </th>
            </tr>
          </thead>
          <tbody>
            {DataContacts.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="col" className="px-6 py-3">
                  {item.id}
                </td>
                <td scope="col" className="px-6 py-3">
                  {item.registrarId}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.city}</td>
                <td className="px-6 py-4">{item.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;
