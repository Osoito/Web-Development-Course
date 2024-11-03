const getFeedbacks = async (courseId, rating) => {
    const kv = await Deno.openKv();
    const key = ["feedback", courseId, rating];
    const feedback = await kv.get(key);
    return feedback.value ?? 0;
};

const updateFeedbacks = async (courseId, rating) => {
    const kv = await Deno.openKv();
    let feedback = await getFeedbacks(courseId, rating);
    feedback++;
    const key = ["feedback", courseId, rating];
    await kv.set(key, feedback);
};

export { getFeedbacks, updateFeedbacks };
