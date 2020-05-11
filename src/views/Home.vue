<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-8 item">
          <img class="monopoly__coin col-4" src="../assets/img/coins2.png" alt="монополия " />
          <img class="monopoly__man col-12" src="../assets/img/prject.png" alt="монополия " />
        </div>
        <div class="col-9 offset-md-2 item text-center">
          <div class="col-6 money__bar_lenght">
            <div class="progress money__bar">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 75%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <span class="about__company"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta cumque ipsum omnis
            aliquid possimus blanditiis, neque velit eaque obcaecati eos culpa hic, unde quas?
            Voluptatem voluptatum laudantium similique debitis?</span
          >
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="section-title" id="Team">Team</h1>
          </div>
          <!-- /.col-md-12 -->
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="../assets/img/TrenerTree.jpg" style="width:91%" alt="ментор" />
              </div>
              <div class="team-content">
                <h3 class="title">Artem</h3>
                <span class="post">Mentors</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="../assets/img/TrenerOne.jpg" style="width:112%" alt="ментор" />
              </div>
              <div class="team-content">
                <h3 class="title">Andrey</h3>
                <span class="post">Mentors</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="our-team">
              <div class="pic">
                <img src="../assets/img/TrenerTwo.jpg" style="width:91%" alt="ментор" />
              </div>
              <div class="team-content">
                <h3 class="title">Dmitry</h3>
                <span class="post">Mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="products" class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="section-title">Project</h1>
            </div>
            <!-- /.col-md-12 -->
          </div>
          <!-- /.row -->
          <div class="row">
            <div class="col-md-3 col-sm-6" v-for="project in PROJECT" :key="project.id">
              <div class="product-item">
                <div class="item-thumb">
                  <span class="note">
                    <img src="../assets/img/small_logo_1.png" alt="photo_1" />
                  </span>
                  <div class="overlay">
                    <span class="Mentor__Project">Mentors: {{ project.Mentor }}</span>
                    <div class="overlay-inner">
                      <span class="view-detail">{{ project.description }}</span>
                      <br />
                      <a class="more__details" href="#">Подробнее</a>
                    </div>
                    <div class="progress project__moneyBar">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <!-- /.overlay -->
                  <img :src="project.images" alt="main__photo" />
                </div>
                <!-- /.item-thumb -->
                <h3>{{ project.name }}</h3>
                <span>
                  Пожертвовали:
                  <em class="text">{{ project.Donated }}</em>
                  <br />осталось-
                  <em class="price">{{ project.left }}</em>
                </span>
              </div>
              <!-- /.product-item -->
            </div>
            <!-- /.col-md-3 -->
            <!-- /.col-md-3 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  props: {
    project: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      skill: 20,
      knowledge: 33,
      power: 78,
      items: [
        {
          src: "https://prorivists.files.wordpress.com/2019/05/socioterms.jpg",
        },
        {
          src: "https://fincult.info/upload/medialibrary/950/CB_L_kraudfanding_01_20171124.jpg",
        },

        {
          src: "https://blog.airfunding.net/wp-content/uploads/2019/05/CW_whats-1-1.png",
        },
        {
          src: "https://www.sprout.nl/sites/default/files/field/image/crowdfunding.jpg",
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["PROJECT"]),
  },
  methods: {
    ...mapActions(["GET_PROJECT_FROM_API"]),
  },
  mounted() {
    this.GET_PROJECT_FROM_API();
  },
};
</script>
