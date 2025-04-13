const ratingsCard = document.getElementById('ratings-card')
const thankyouCard = document.getElementById('thankyou-card')
const submitButton = document.getElementById('submit-button')
const ratings = document.querySelectorAll('.card-rating')

const handleSubmit = () => {
  ratingsCard.style.display = 'none'
  thankyouCard.style.display = 'block'
  thankyouCard.classList.add('scale-up-center')
}

submitButton.addEventListener('click', handleSubmit)

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    ratings.forEach((r) => r.classList.remove('selected'))
    rating.classList.add('selected')
  })
})
