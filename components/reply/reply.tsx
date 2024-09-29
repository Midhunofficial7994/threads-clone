'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import styles from './reply.module.scss';
import axios from 'axios';
import ProfileImage from '../ProfileImage';

interface ReplyProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    postId: string;
    userId: string;
    userProfilePic: string;
    username: string;
}

const Reply: React.FC<ReplyProps> = ({ isOpen, onClose, children, postId, userId, userProfilePic, username }) => {
    const [post, setPost] = useState<any>(null);
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(
                        `https://social-media-rest-apis.onrender.com/api/posts/post/${postId}`
                    );
                    setPost(response.data.post);
                    console.log('this is a post', post)
                } catch (error) {
                    console.error("Failed to fetch post:", error);
                }
            };
            fetchPost();
        }
    }, [isOpen, postId]);


    const handleReplySubmit = async () => {
        if (!comment.trim()) return;

        const reply = {
            text: comment,
            userId: userId,
            username: username,
            userProfilePic: userProfilePic
        };

        try {
            setLoading(true);  // Set loading state to true while submitting
            const response = await axios.post(
                `https://social-media-rest-apis.onrender.com/api/posts/${postId}/reply`,
                reply
            );

            setComment('');  // Clear comment input after successful submission
        } catch (error) {
            console.error("Failed to reply to post:", error);
        } finally {
            setLoading(false);  // Reset loading state after submission
        }
    };



    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <button className={styles["close-btn"]} onClick={onClose}>
                        &times;
                    </button>
                </div>
                {post && (
                    <div className={styles['post-content']}>
                        <div className={styles['user-info']}>

                            {post.postById.profilePic ? (
                                <img
                                    src={post.postById.profilePic}
                                    alt={`${post.postById.username}'s profile`}
                                    className={styles['profile-image']}
                                />
                            ) : (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    alt="profile"
                                    className={styles['profile-image']}
                                />
                            )}

                            <div>
                                <h1>{post.postById.username}</h1>
                                <h2>{post.text}</h2>
                            </div>
                        </div>
                        <div className={styles['the-line']}>

                        </div>
                        {post.image && (
                            <div className={styles['post-image-container']}>
                                <img src={post.image} alt="Post" className={styles['post-image']} />

                            </div>
                        )}
                    </div>
                )}



                <div className={styles.user}>{children}</div>

                <div className={styles.body}>
                    <textarea
                        placeholder="Add your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className={styles.footer}>
                    <button
                        className={styles['submit-btn']}
                        onClick={handleReplySubmit}
                        disabled={loading}
                    >
                        {loading ? 'Posting...' : 'Post'}
                    </button>
                </div>
                <div className={styles.repliesContainer}>
                    {post?.replies?.length > 0 ? (
                        post.replies.map((reply: any, index: number) => (
                            <div key={index} className={styles.reply}>
                                <div className={styles['reply-user-info']}>
                                    <ProfileImage profilePic={reply.userProfilePic
                                    }
                                        altText={reply.username}
                                        className={styles['profile-image']}
                                    />
                                    <p>{reply.username}</p>
                                </div>
                                <p>{reply.text}</p>
                            </div>
                        ))
                    ) : (
                        <p>No replies yet.</p>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Reply;
