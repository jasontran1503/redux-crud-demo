import { yupResolver } from '@hookform/resolvers/yup';
import { createPost, updatePost } from 'features/Post/redux/actions';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as yup from 'yup';

function PostForm() {
  const history = useHistory();
  const { postId } = useParams();
  const postList = useSelector((state) => state.post.data);
  const isCreateMode = !postId;
  const postItem = postList.find((post) => post.id === Number(postId));

  const defaultValues = isCreateMode
    ? {
        title: '',
        body: '',
      }
    : {
        title: postItem.title,
        body: postItem.body,
      };

  const validation = yup.object().shape({
    title: yup.string().required('Title is required'),
    body: yup.string().required('Body is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validation),
    defaultValues,
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (isCreateMode) {
      const newPost = {
        id: Date.now(),
        title: data.title,
        body: data.body,
      };
      const action = createPost(newPost);
      dispatch(action);
    } else {
      const postUpdated = {
        id: Number(postId),
        title: data.title,
        body: data.body,
      };
      const action = updatePost(postUpdated);
      dispatch(action);
    }

    history.push('/post');
  };

  return (
    <form style={{ marginTop: '20px' }} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          {...register('title')}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
        />
        <p className="invalid-feedback">{errors.title?.message}</p>
      </div>
      <div className="form-group">
        <label>Body</label>
        <input
          type="text"
          {...register('body')}
          className={`form-control ${errors.body ? 'is-invalid' : ''}`}
        />
        <p className="invalid-feedback">{errors.body?.message}</p>
      </div>
      <button type="submit" className="btn btn-success">
        {postId ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default PostForm;
