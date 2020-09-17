<template>
  <div>
    <section v-for="(time, index) in times" :key="index + 'time'">
      <component :is="activeComponent" v-if="time.id == movieId">
        <h4>{{ time.hallName }}</h4>
        <button
          class="time-button"
          v-for="(clock, index) in getTimes"
          :key="index"
          @click="selectTime(clock)"
          :class="{ selectedTimeButton: clock === selectedTime }"
        >
          {{ clock }}
        </button>
        <div
          v-for="(ticket, index) in prices"
          :key="index + 'price'"
          class="calculate-ticket"
        >
          <button
            :class="{ disabled: !selectedTickets[ticket.label] }"
            @click="decreaseTicket(ticket.label)"
          >
            -
          </button>
          <div class="calculate-main">
            <span class="label">
              <span class="count" v-if="selectedTickets[ticket.label] > 0">
                {{ selectedTickets[ticket.label] }}
              </span>

              {{ ticket.label }}
            </span>
            <span class="price">
              {{ parseInt(ticket.price, 10).toFixed(2) }} TL
            </span>
          </div>
          <button @click="increaseTicket(ticket.label)">+</button>
        </div>
        <button
          @click="navigateToSeatSelection"
          :disabled="!isTimeAndTicketCountSelected"
          type="button"
          class="btn btn-success select-button"
        >
          Select Your Seat
        </button>
      </component>
    </section>
  </div>
</template>

<script>
import BackdropImage from "../SmallComponents/BackdropImage"
import Poster from "../SmallComponents/Poster"
import MainMovie from "./MainMovie"
//import CalculateTicket from "../SmallComponents/CalculateTicket"
import { mapGetters } from "vuex"
export default {
  name: "movieTickets",
  components: {
    BackdropImage,
    Poster,
    MainMovie
    //CalculateTicket
  },
  data() {
    return {
      activeComponent: MainMovie,
      selectedTime: null,
      selectedTickets: {}
    }
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time
    },
    decreaseTicket(type) {
      this.selectedTickets[type] = Math.max(--this.selectedTickets[type], 0)
    },
    increaseTicket(type) {
      this.selectedTickets[type] = ++this.selectedTickets[type]
      console.log(this.selectedTickets)
    },
    setTicketsType() {
      const types = {}
      this.prices.forEach(ticket => {
        types[ticket.label] = 0
      })
      this.selectedTickets = types

      //! burası çalışmıyor.
      /*
      this.prices.forEach(ticket => {
        this.selectedTickets[ticket.label] = 0
      })
      */
    },
    navigateToSeatSelection() {
      this.$store.commit("setSelectedTime", this.selectedTime)
      this.$store.commit("setSelectedTicketOptions", this.selectedTickets)
      this.$router.push(this.seatSelectionPath)
    }
  },
  created() {
    this.setTicketsType()
  },
  computed: {
    ...mapGetters({
      details: "getDetails",
      times: "getTickets",
      prices: "getPrices"
    }),
    seatSelectionPath() {
      return `/movie/${this.movieId}/seat-selection`
    },
    isTimeAndTicketCountSelected() {
      let selected = false
      for (const key in this.selectedTickets) {
        if (this.selectedTickets[key] > 0) {
          selected = true
        }
      }
      return selected && this.selectedTime
    },
    numberOfTickets() {
      return this.$store.getters.getCounter
    },
    movieId() {
      return this.$route.params.id
    },
    getTimes() {
      const timesList = []
      this.times.forEach(time => {
        if (this.movieId == time.id) {
          time.times.forEach(clock => {
            timesList.push(clock)
          })
        }
      })
      return timesList
    }
  }
}
</script>

<style scoped>
.time-button {
  padding: 10px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 14px;
  margin-right: 10px;
}
.time-button:hover {
  background-color: #fff;
  color: #000;
}
.selectedTimeButton {
  background-color: #fff;
  color: #000;
}
.calculate-ticket {
  margin-top: 40px;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calculate-ticket .disabled {
  opacity: 0.33;
  cursor: not-allowed;
}
.calculate-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 6px;
}
.calculate-main .label {
  margin-bottom: 16px;
}
.calculate-main .count {
  font-weight: 900;
  font-size: 15px;
  color: #fff;
}
.calculate-ticket button {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  border-radius: 99px;
  border: 1px solid #fff;
  padding: 24px;
}
.type {
  font-weight: bold;
  font-size: 16px;
  color: #fff;
}
.price {
  color: #ccc;
}
.select-button {
  margin-top: 24px;
}
</style>
