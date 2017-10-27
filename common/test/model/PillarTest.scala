package model

import org.scalatest.{FlatSpec, Matchers}
import play.api.libs.json.{JsResultException, Json}

class PillarTest extends FlatSpec with Matchers {

  "A pillar" should "have a name" in {
    Pillar.News.name should be("News")
  }

  "Pillars" should "be encodable in json" in {
    val pillars = Seq(Pillar.Arts, Pillar.Opinion, Pillar.Sport)
    val expectedJson = Json.parse("""["Arts", "Opinion", "Sport"]""")
    Json.toJson(pillars) should be(expectedJson)
  }

  "Pillars" should "be decoded from json" in {
    val expectedPillars = Seq(Pillar.Lifestyle, Pillar.Opinion, Pillar.News)
    Json.parse("""["Lifestyle", "Opinion", "News"]""").as[Seq[Pillar]] should be(expectedPillars)
  }

  "Unknown pillar" should "throw an error when being decoded from json" in {
    an[JsResultException] should be thrownBy(Json.parse(""""DoesNotExist"""").as[Pillar])
  }

}
