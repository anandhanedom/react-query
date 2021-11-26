import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = async (email) => {
  const res = await axios.get(`http://localhost:4000/users/${email}`);
  return res.data;
};

const fetchCoursesByChannelId = async (channelId) => {
  const res = await axios.get(`http://localhost:4000/channels/${channelId}`);
  return res.data;
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>Dependent Queries</div>;
};
