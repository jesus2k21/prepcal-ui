<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <card class="text-center">
                    <h2 class="card-title">Quick Track</h2>
                    <div id="clock">
                        <h4 id="time">{{ time }}</h4>
                    </div>
                    <base-button size="sm" type="primary" id="start" @click="start()">
                        <i class="tim-icons icon-triangle-right-17"></i>
                    </base-button>
                    <base-button size="sm" type="primary" id="stop" @click="stop()">
                        <i class="tim-icons icon-button-pause"></i>
                    </base-button>
                    <base-button size="sm" type="primary" id="reset" @click="reset()">
                        <i class="tim-icons icon-refresh-01"></i>
                    </base-button>
                    <form @submit.prevent>
                        <div class="form-row">
                            <base-input label="Category">
                                <select class="form-control">
                                    <option value="" disabled selected>Select Category</option>
                                    <option v-for="cat in sportsCats"> {{ cat }} </option>
                                </select>
                            </base-input>
                            <base-input label="Add Category">
                                <base-button size="sm" native-type="submit" type="primary">
                                    <i class="tim-icons icon-simple-add"></i>
                                </base-button>
                            </base-input>
                        </div>
                    </form>
                </card>
            </div>
            <div class="col-lg-4">
                <card class="text-center">
                <h2 class="card-title">Now Playing on Spotify</h2>
                <p class="card-text">To be continued!</p>
                </card>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <card class="text-center">
                <h4 class="card-title">Recently Tracked</h4>
                <div class="table-responsive">
                  <base-table :data="table1.data"
                      :columns="table1.columns"
                      thead-classes="text-primary">
                  </base-table>
              </div>
          </card>
            </div>
        </div>
    </div>
</template>
<script>
import { BaseTable } from "@/components";
import { computed } from "vue";

const tableColumns = ["Event", "Category", "Duration"];
const tableData=[
  {
      id: 1,
      event: "Event",
      category: "Homework",
      duration: "1:00:00"
  }
]

export default {
    components: {
        BaseTable,
    },
    data() {
        return {
            sportsCats: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'],
            table1: {
                title: "Recently Tracked",
                columns: [...tableColumns],
                data: [...tableData]
            },
            timeBegan: null,
            timeStopped: null,
            stoppedDuration: 0,
            started: null,
            running: false,
            time2: {hour: 0, min: 0, sec: 0, ms: 0}
        };
    },
    methods: {
        start() {
            console.log("Starting stopwatch...")
            if(this.running) return;
            if (this.timeBegan === null) {
                this.timeBegan = new Date();
            }
            if (this.timeStopped !== null) {
                this.stoppedDuration += (new Date() - this.timeStopped);
            }
            

            this.started = setInterval( () => {
                var currentTime = new Date()
                , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
                this.time2.hour = timeElapsed.getUTCHours()
                this.time2.min = timeElapsed.getUTCMinutes()
                this.time2.sec = timeElapsed.getUTCSeconds()
                this.time2.ms = timeElapsed.getUTCMilliseconds();

            }, 1000);
            this.running = true;
        },
        stop() {
            console.log("Stopping stopwatch...")
            this.running = false;
            this.timeStopped = new Date();
            clearInterval(this.started);
        },
        reset() {
            this.running = false;
            clearInterval(this.started);
            this.stoppedDuration = 0;
            this.timeBegan = null;
            this.timeStopped = null;
            this.time = "00:00:00";
        },
        zeroPrefix(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    },
    computed: {
        time() {
            if (this.time2.sec) {
                return this.zeroPrefix(this.time2.hour, 2) + ":" + 
                this.zeroPrefix(this.time2.min, 2) + ":" + 
                this.zeroPrefix(this.time2.sec, 2);
            } else {
                return '00:00:00'
            }
        }
    }
};

</script>
<style>
</style>