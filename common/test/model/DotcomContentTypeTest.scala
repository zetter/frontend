package model

import org.scalatest.{FlatSpec, Matchers}
import play.api.libs.json.{JsResultException, Json}

class DotcomContentTypeTest extends FlatSpec with Matchers {

  "A Content type" should "have a name" in {
    DotcomContentType.Article.name should be("Article")
    DotcomContentType.NetworkFront.name should be("Network Front")
    DotcomContentType.Identity.name should be("userid")
  }

  "Content types" should "be encodable in json" in {
    val types = Seq(
      DotcomContentType.Survey,
      DotcomContentType.NetworkFront,
      DotcomContentType.Identity
    )
    val expectedJson = Json.parse("""["Survey", "Network Front", "userid"]""")
    Json.toJson(types) should be(expectedJson)
  }

  "Content types" should "be decoded from json" in {
    val expectedTypes = Seq(
      DotcomContentType.TagIndex,
      DotcomContentType.NetworkFront,
      DotcomContentType.Identity
    )
    Json.parse("""["Index", "Network Front", "userid"]""").as[Seq[DotcomContentType]] should be(expectedTypes)
  }

  "Unknown type" should "throw an error when being decoded from json" in {
    an[JsResultException] should be thrownBy(Json.parse(""""I don't exist"""").as[DotcomContentType])
  }

}
