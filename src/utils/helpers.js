import { redirect } from 'react-router-dom';

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');

  if (!res.ok) {
    throw Error("Could't fetch careers");
  }
  return res.json();
};

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error("Could't find the career");
  }
  return res.json();
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submit = {
    email: data.get('email'),
    message: data.get('message'),
  };

  if (submit.message.length < 10) {
    return { error: 'Message must be at least 10 characters' };
  }

  return redirect('/');
};
