<template>
  <section class="p-8 bg-roofliner-blue">
    <div class="container flex flex-col gap-4 mx-auto">
      <h2 class="text-3xl font-bold text-center text-white uppercase">
        Reviews
      </h2>
      <ReviewItem
        reviewID=""
        v-for="(review, index) in googleReviews"
        :key="index"
        :review="review"
      ></ReviewItem>
    </div>
  </section>
</template>

<script setup>
import ReviewItem from "./ReviewItem.vue";

const googleReviews = [
  {
    name: "Michael Chase",
    photo:
      "https://lh3.googleusercontent.com/a-/AD5-WCnkD8-vpUrbQA8bVcCmQIp1Fp_ah_QrOMmjYDzM=w36-h36-p-rp-mo-br100",
    rating: 5,
    date: new Date(),
    text: "We bought the solid roof kit as a DIY project over the lockdown period. The team at Roofliner couldn’t have been more helpful and professional, from the start at measuring up and ordering, all the way through to our building control sign off. The roof kit was well made, delivered in perfect condition, and went together without issue. Now that the roof is complete, the room plastered and decorated, we are loving the improvement this roof has made to a previously unusable conservatory. We would certainly recommend the product and the team at Roofliner, as we love this new room to our home.",
    link: "https://g.co/kgs/JPgvWM",
  },
  {
    name: "Michael Chase",
    photo:
      "https://lh3.googleusercontent.com/a-/AD5-WCnkD8-vpUrbQA8bVcCmQIp1Fp_ah_QrOMmjYDzM=w36-h36-p-rp-mo-br100",
    rating: 5,
    date: new Date(),
    text: "We bought the solid roof kit as a DIY project over the lockdown period. The team at Roofliner couldn’t have been more helpful and professional, from the start at measuring up and ordering, all the way through to our building control sign off. The roof kit was well made, delivered in perfect condition, and went together without issue. Now that the roof is complete, the room plastered and decorated, we are loving the improvement this roof has made to a previously unusable conservatory. We would certainly recommend the product and the team at Roofliner, as we love this new room to our home.",
    link: "https://g.co/kgs/JPgvWM",
  },
  {
    name: "Michael Chase",
    photo:
      "https://lh3.googleusercontent.com/a-/AD5-WCnkD8-vpUrbQA8bVcCmQIp1Fp_ah_QrOMmjYDzM=w36-h36-p-rp-mo-br100",
    rating: 5,
    date: new Date(),
    text: "We bought the solid roof kit as a DIY project over the lockdown period. The team at Roofliner couldn’t have been more helpful and professional, from the start at measuring up and ordering, all the way through to our building control sign off. The roof kit was well made, delivered in perfect condition, and went together without issue. Now that the roof is complete, the room plastered and decorated, we are loving the improvement this roof has made to a previously unusable conservatory. We would certainly recommend the product and the team at Roofliner, as we love this new room to our home.",
    link: "https://g.co/kgs/JPgvWM",
  },
];
</script>
