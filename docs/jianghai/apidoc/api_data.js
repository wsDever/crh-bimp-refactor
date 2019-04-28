define({ "api": [
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_num",
            "defaultValue": "0",
            "description": "<p>页面码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_size",
            "defaultValue": "10",
            "description": "<p>页面数量</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "group": "E__data_codeStationTest_xpe_products_snp_xpe_products_snp_backend_src_main_java_com_cairh_xpe_snp_backend_action_mobile_APP_InfoQueryAction_java",
    "groupTitle": "E__data_codeStationTest_xpe_products_snp_xpe_products_snp_backend_src_main_java_com_cairh_xpe_snp_backend_action_mobile_APP_InfoQueryAction_java",
    "name": ""
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3040",
    "title": "CRH-SNP3040-活动列表",
    "group": "active",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>页码数量（默认20条）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adv_location",
            "description": "<p>广告位位置  字典：11244  字典子项1:首页 2：产品中心 不传查全部活动</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_location",
            "description": "<p>广告位位置（字典：11244  字典子项1:首页 2：产品中心）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>公告内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片URL地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>链接URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link_target",
            "description": "<p>链接打开方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_start",
            "description": "<p>有效期开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_end",
            "description": "<p>有效期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apps_scope",
            "description": "<p>使用范围</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login_flag",
            "description": "<p>登录标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag_ass",
            "description": "<p>辅助标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "page_params",
            "description": "<p>页面参数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_order",
            "description": "<p>图片序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_JjbmotmsgAction.java",
    "groupTitle": "active",
    "name": "Post___getSnpCrhSnp3040"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2012",
    "title": "CRH-SNP2012-获取首页推广二维码",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "defaultValue": "3",
            "description": "<p>二维码图片大小 未传参时默认3（3表示300*300）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_way",
            "description": "<p>江海不传此参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_qrcode",
            "description": "<p>渠道二维码（base64）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qrcode_url",
            "description": "<p>二维码扫描链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>二维码图片链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_model_no",
            "description": "<p>佣金模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_model_name",
            "description": "<p>佣金模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_remark",
            "description": "<p>佣金说明备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_rate",
            "description": "<p>佣金费率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status_str",
            "description": "<p>渠道状态描述，显示有效或者无效</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_branch_name",
            "description": "<p>营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work_address",
            "description": "<p>执业地域</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type",
            "description": "<p>经纪人类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type_str",
            "description": "<p>经纪人类型描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profession_cert",
            "description": "<p>执业证书编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "security_name",
            "description": "<p>券商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "website_url",
            "description": "<p>券商官网地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_phone",
            "description": "<p>券商客服电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_title",
            "description": "<p>经纪人邀请开户标题（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_summary",
            "description": "<p>经纪人邀请开户内容（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_image",
            "description": "<p>邀请开户logo图片地址（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>有无首推渠道，0：有，-1：无</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invit_slogen",
            "description": "<p>分享slogen</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invit_background_model",
            "description": "<p>分享背景模板</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2012"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2013",
    "title": "CRH-SNP2013-获取登录用户的渠道列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>二维码图片大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>渠道列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.channel_qrcode",
            "description": "<p>渠道二维码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_fare_model",
            "description": "<p>snp佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.fare_model_name",
            "description": "<p>佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.preferred_flag",
            "description": "<p>是否首推 1:首推 0：非首推</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2013"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2014",
    "title": "CRH-SNP2014-通过渠道短码获取渠道信息详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "defaultValue": "3",
            "description": "<p>二维码图片大小 未传参时默认3（3表示300*300）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_qrcode",
            "description": "<p>渠道二维码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status_name",
            "description": "<p>渠道状态名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "open_commission",
            "description": "<p>开户佣金（开户提成）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_commission",
            "description": "<p>有效开户佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snp_fare_model",
            "description": "<p>snp佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_name",
            "description": "<p>佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_name",
            "description": "<p>分支机构名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_count",
            "description": "<p>经纪人个数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiration_date",
            "description": "<p>渠道有效日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_title",
            "description": "<p>经纪人邀请开户标题（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_summary",
            "description": "<p>经纪人邀请开户内容（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_image",
            "description": "<p>邀请开户logo图片地址（废弃，后续从CRH-SNP4003接口取）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invit_slogen",
            "description": "<p>分享slogen</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invit_background_model",
            "description": "<p>分享背景模板</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2014"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2015",
    "title": "CRH-SNP2015-通过渠道短码更新渠道信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>渠道信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelInfo.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "effective_commission",
            "description": "<p>有效开户佣金</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>更新结果</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2015"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2016",
    "title": "CRH-SNP2016-查询佣金模板列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>渠道信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelInfo.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "effective_commission",
            "description": "<p>有效开户佣金</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>更新结果</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2016"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2017",
    "title": "CRH-SNP2017-通过模板编号获取营业部列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fare_model",
            "description": "<p>费用模版</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "branchList",
            "description": "<p>系统消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否还有下一个</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2017"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2018",
    "title": "CRH-SNP2018-获取所有银行列表",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "branchList",
            "description": "<p>系统消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.bank_code",
            "description": "<p>银行编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.bank_name",
            "description": "<p>银行名称</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2018"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2019",
    "title": "CRH-SNP2019-保存新渠道信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>渠道信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.en_branch_no",
            "description": "<p>允许营业部</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2019"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2020",
    "title": "CRH-SNP2020-上传渠道logo",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "CommonsMultipartFile",
            "optional": false,
            "field": "qrcode_logo",
            "description": "<p>渠道二维码中的logo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_base64",
            "description": "<p>渠道二维码的base64编码串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2020"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2021",
    "title": "CRH-SNP2021-提交渠道延期申请",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valid_until",
            "description": "<p>有效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2021",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2022",
    "title": "CRH-SNP2022-通过手机号（或snp_account）、日期区间查询所有（一个）渠道的每日开户数数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>版本no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code_list",
            "description": "<p>短码组合串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "investor_type",
            "description": "<p>投资者类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dataList",
            "description": "<p>渠道的每日开户数数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataList.date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataList.count",
            "description": "<p>当天开户数</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2022"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2022",
    "title": "CRH-SNP2022-通过手机号（或snp_account）查询所有（一个）渠道的昨日开户数、本月开户数、累计开户数",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>版本no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code_list",
            "description": "<p>短码组合串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "investor_type",
            "description": "<p>投资者类别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "yesterday",
            "description": "<p>渠道的昨日开户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curr_month",
            "description": "<p>本月开户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>累计开户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2022"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2024",
    "title": "CRH-SNP2024-查询营销人所有（一个）渠道年度、月份开户数数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>版本no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code_list",
            "description": "<p>短码组合串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "investor_type",
            "description": "<p>投资者类别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dataList",
            "description": "<p>营销人所有（一个）渠道年度、月份开户数数据</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2024"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2042",
    "title": "CRH-SNP2042-设置渠道为首推渠道",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2042",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2045",
    "title": "CRH-SNP2045-获取审核状态",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>业务流程no</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "audit_status",
            "description": "<p>审核状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2045"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2046",
    "title": "CRH-SNP2046-获取版本信息",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_no",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_name",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_size",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_instruct",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_url",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "min_os_version",
            "description": "<p>最低版本配置</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2046"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2047",
    "title": "CRH-SNP2047-获取cookie字符串(增加NullPointerException异常的保护)",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valid_until",
            "description": "<p>有效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cookie_str",
            "description": "<p>cookie字符串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_login",
            "description": "<p>是否登录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2047"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2050",
    "title": "CRH-SNP2050-校验客户端版本",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_no",
            "description": "<p>版本no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_kind",
            "description": "<p>App类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_tag",
            "description": "<p>App标签</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_no",
            "description": "<p>版本no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_name",
            "description": "<p>版本名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dl_url",
            "description": "<p>App下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2050"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2066",
    "title": "CRH-SNP2066-通过经纪人来源和手机号（或snp_account）查询昨日开户数、本月开户数、累计开户数",
    "description": "<ol>     <li>作者：liwei</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_way",
            "description": "<p>开户途径  1二维码开户  2app开户  3其他非现场开户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "today",
            "description": "<p>今日开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "yesterday",
            "description": "<p>昨日开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curr_week",
            "description": "<p>本周开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curr_month",
            "description": "<p>本月开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>累计开户人数</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2066"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2067",
    "title": "CRH-SNP2067-通过手机号（或snp_account）、日期区间查询所有每日开户数数据",
    "description": "<ol>     <li>作者：liwei</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始时间20171001</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束时间20171011</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_way",
            "description": "<p>开户途径 0全部 1二维码开户  2app开户  3其他非现场开户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "data",
            "description": "<p>每日开户数数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count",
            "description": "<p>数量</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2067"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2068",
    "title": "CRH-SNP2068-查询经纪人年度、月份开户数数据",
    "description": "<ol>     <li>作者：liwei</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_way",
            "description": "<p>开户途径 0全部  1二维码开户  2app开户  3其他非现场开户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "data",
            "description": "<p>查询经纪人年度、月份开户数数据</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_StatisticsAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2068"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2105",
    "title": "CRH-SNP2105-用户模板类信息列表查询",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_type",
            "description": "<p>模板类型 1：背景图片 2：slogen</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "resultList",
            "description": "<p>列表名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resultList.model_info",
            "description": "<p>模板类信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2105",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2106",
    "title": "CRH-SNP2106-用户模板类信息更新",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_info",
            "description": "<p>模板类信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_type",
            "description": "<p>模板类型 1：背景图片 2：slogen</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2106",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2108",
    "title": "CRH-SNP2108-客服电话查询",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_tel",
            "description": "<p>营业部电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "call_center_tel",
            "description": "<p>客服中心电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2108"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2109",
    "title": "CRH-SNP2109-用户基础审核信息保存",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mod_type",
            "description": "<p>修改类型 WXQM：微店签名 TX：头像 ZW：职位 GRJS：个人介绍 WXEWM：微信二维码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mod_info",
            "description": "<p>修改后内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "origin_info",
            "description": "<p>修改前内容</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2109",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP2120",
    "title": "CRH-SNP2120-用户基础审核状态查询",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mod_type",
            "description": "<p>修改类型  WXQM：微店签名 TX：头像 ZW：职位 GRJS：个人介绍 WXEWM：微信二维码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "WXQM",
            "description": "<p>微信签名审核状态 1:待审核 2:审核中 4:审核打回 6:办理成功 7:办理失败 8:作废</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TX",
            "description": "<p>头像审核状态 1:待审核 2:审核中 4:审核打回 6:办理成功 7:办理失败 8:作废</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ZW",
            "description": "<p>职位审核状态 1:待审核 2:审核中 4:审核打回 6:办理成功 7:办理失败 8:作废</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GRJS",
            "description": "<p>个人介绍审核状态 1:待审核 2:审核中 4:审核打回 6:办理成功 7:办理失败 8:作废</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "WXEWM",
            "description": "<p>微信二维码审核状态 1:待审核 2:审核中 4:审核打回 6:办理成功 7:办理失败 8:作废</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp2120"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP3050",
    "title": "CRH-SNP3050-查询签约/解约流程状态",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_flow_status",
            "description": "<p>签约流程状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_flow_status_un",
            "description": "<p>解约流程状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_flow_status_resign",
            "description": "<p>续签流程状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp3050"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP3051",
    "title": "CRH-SNP3051-保存签约信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail_address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "e_mail",
            "description": "<p>邮件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_gender",
            "description": "<p>性别(男，女)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_address",
            "description": "<p>身份证地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_begindate",
            "description": "<p>身份证有效起始日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_enddate",
            "description": "<p>身份证有效截止日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issued_depart",
            "description": "<p>使用部门</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp3051"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP3053",
    "title": "CRH-SNP3053-档案组件上传视频",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myFiles",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video_url",
            "description": "<p>文件上传地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_UploadVideoAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp3053"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP3054",
    "title": "CRH-SNP3054-提交流程",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "step",
            "description": "<p>流程步骤</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "curr_url",
            "description": "<p>当前路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "educational_experience_list",
            "description": "<p>教育经历列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "work_experience_list",
            "description": "<p>工作经历列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>经纪人名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp3054"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP3068",
    "title": "CRH-SNP3068-保存续签或变更信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>业务流程no</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "audit_status",
            "description": "<p>审核状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp3068"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP4003",
    "title": "CRH-SNP4003-一次分享信息获取",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "share_type",
            "description": "<p>分享类型 1：开户  2：邀约 3：推广</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_title",
            "description": "<p>分享标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_summary",
            "description": "<p>分享内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_image",
            "description": "<p>分享logo图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/WxShareAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp4003"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP4004",
    "title": "CRH-SNP4004-二次分享信息获取",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "share_type",
            "description": "<p>分享类型 1：开户  2：邀约 3：推广</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_title",
            "description": "<p>分享标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_summary",
            "description": "<p>分享内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_image",
            "description": "<p>分享logo图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "khUrl",
            "description": "<p>开户地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>应用id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jsapi_ticket",
            "description": "<p>jsapi_ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nonceStr",
            "description": "<p>nonceStr</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>签名值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/WxShareAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp4004"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP4005",
    "title": "CRH-SNP4005-分享广告位信息查询（分享出去页面底部导航）",
    "group": "app",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_file",
            "description": "<p>头像（base64）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type_str",
            "description": "<p>岗位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_name",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_url",
            "description": "<p>微店访问链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "open_url",
            "description": "<p>开户访问链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inviteUrl",
            "description": "<p>签约经纪人访问链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/WxShareAction.java",
    "groupTitle": "app",
    "name": "PostSnpCrhSnp4005"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2001",
    "title": "CRH-SNP2001-验证用户名密码是否正确",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_content",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encode_type",
            "description": "<p>加密方式  0表示明文 1表示密文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_code_type",
            "description": "<p>是否需要图片验证码 0表示不需要 1表示需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_code",
            "description": "<p>图形验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_flow_status",
            "description": "<p>用户状态控制串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organ_flag",
            "description": "<p>机构标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_status",
            "description": "<p>用户状态 后台代码看不出代表什么意思了，要看下前端代码对这个字段怎么用0: 1: 2: 3: 4: 5:</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fail_reason",
            "description": "<p>打回原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type",
            "description": "<p>员工类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marketing_flag",
            "description": "<p>营销标志 1表示可营销 0 不可营销</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>打回原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_default_pwd",
            "description": "<p>标志是否是默认密码登录，0表示不是，1表示是</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>访问令牌 放header里</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2001"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2002",
    "title": "CRH-SNP2002-获取图形验证码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HttpServletRequest",
            "optional": false,
            "field": "request",
            "description": "<p>HttpServletRequest对象</p>"
          },
          {
            "group": "Parameter",
            "type": "HttpServletResponse",
            "optional": false,
            "field": "response",
            "description": "<p>HttpServletResponse对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageBase64",
            "description": "<p>图形验证码的Base64码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2002"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2003",
    "title": "CRH-SNP2003-校验图片验证码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_code",
            "description": "<p>图形验证码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2003",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2004",
    "title": "CRH-SNP2004-获取短信验证码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg_type",
            "defaultValue": "1",
            "description": "<p>1：更换绑定手机，2：更换密码，3：短信验证码登录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_code",
            "description": "<p>图形验证码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2004",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2005",
    "title": "CRH-SNP2005-验证短信验证码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_code",
            "description": "<p>短信验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>MAC地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type",
            "description": "<p>经纪人类别，对应数据字典11214</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2005"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2006",
    "title": "CRH-SNP2006-设置用户登录密码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_code",
            "description": "<p>图片验证码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2006",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2007",
    "title": "CRH-SNP2007-获取所属单位列表",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "companyMap",
            "description": "<p>所属单位列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyMap.company_type",
            "description": "<p>所属单位列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyMap.company_type_name",
            "description": "<p>所属单位列表</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "companyMap.company_list",
            "description": "<p>所属单位列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2007"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2008",
    "title": "CRH-SNP2008-通过员工号查询有效的经纪人",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staff_no",
            "description": "<p>员工号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>经纪人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.staff_no",
            "description": "<p>员工号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.branch_no",
            "description": "<p>分支机构编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.branch_name",
            "description": "<p>机构名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2008"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2009",
    "title": "CRH-SNP2009-通过编号获取银行分支机构",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>分支编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "branchList",
            "description": "<p>银行分支机构列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2009"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2010",
    "title": "CRH-SNP2010-上传证件图片",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "CommonsMultipartFile",
            "optional": false,
            "field": "myFiles",
            "description": "<p>身份证图像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archfileNo",
            "description": "<p>文件编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id",
            "description": "<p>文件包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2010"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2011",
    "title": "CRH-SNP2011-保存注册信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "AppRegisterForm",
            "optional": false,
            "field": "form",
            "description": "<p>app注册对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.access_way",
            "description": "<p>途径  0：微信注册来源经纪人，other：非微信注册来源经纪人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.organ_flag",
            "description": "<p>机构类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.client_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.staff_no",
            "description": "<p>员工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.idcard_no",
            "description": "<p>身份证件号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.user_gender",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.branch_no",
            "description": "<p>分支机构号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.broker_level",
            "description": "<p>经纪人级别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.company_name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.e_mail",
            "description": "<p>e_mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "form.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2011"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2025",
    "title": "CRH-SNP2025-通过手机号（或snp_account）查询所有（一个）渠道的昨日收益、本月收益、累计收益",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "yesterday",
            "description": "<p>渠道的昨日收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curr_month",
            "description": "<p>本月收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>累计收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProfitAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2025"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2026",
    "title": "CRH-SNP2026-通过手机号（或snp_account）、日期区间查询所有（一个）渠道的每日收益数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dataList",
            "description": "<p>渠道的每日收益数据</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProfitAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2026"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2027",
    "title": "CRH-SNP2027-查询营销人所有（一个）渠道年度、月份收益数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resMap",
            "description": "<p>渠道年度、月份收益数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProfitAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2027"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2028",
    "title": "CRH-SNP2028-获取账户首推渠道信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户编码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_exist_channel",
            "description": "<p>是否存在渠道信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2028"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2030",
    "title": "CRH-SNP2030-更新当前登录用户(或子账户)的资料",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "brokerinfo",
            "description": "<p>SNP经纪人对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.mobile_tel",
            "description": "<p>经纪人收集</p>"
          },
          {
            "group": "Parameter",
            "type": "Authinfo",
            "optional": false,
            "field": "authinfo",
            "description": "<p>认证信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_way",
            "description": "<p>途径  0：微信注册来源经纪人，other：非微信注册来源经纪人</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "res",
            "description": "<p>更改结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2030"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2031",
    "title": "CRH-SNP2031-查询子账户年度、月份开户、收益数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dataList",
            "description": "<p>子账户年度、月份开户、收益数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProfitAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2031"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2032",
    "title": "CRH-SNP2032-查询子账户的每日开户或收益数据",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limits_flag",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dataList",
            "description": "<p>子账户的每日开户或收益数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProfitAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2032"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2035",
    "title": "CRH-SNP2035-获取登录用户的系统消息列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dataList",
            "description": "<p>系统消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否还有下一个</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2035"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2036",
    "title": "CRH-SNP2036-当前登录用户更新密码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>原密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_new",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2036",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2037",
    "title": "CRH-SNP2037-获取登录用户所有渠道的客户列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limits_flag",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "customerList",
            "description": "<p>登录用户所有渠道的客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否还有下一个</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2037"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2038",
    "title": "CRH-SNP2038-获取子账户列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "dataList",
            "description": "<p>子账户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2038"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2039",
    "title": "CRH-SNP2039-获取子账户的贡献金额和收益",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>子账户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contribution",
            "description": "<p>总佣金收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reward",
            "description": "<p>总收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2039"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2040",
    "title": "CRH-SNP2040-根据子账户id获取详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>子账户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "data",
            "description": "<p>子账户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.image_file",
            "description": "<p>基础资料-头像base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nick_name",
            "description": "<p>基础资料-昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobile_tel",
            "description": "<p>基础资料-手机</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.broker_type_str",
            "description": "<p>认证资料-类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user_name",
            "description": "<p>认证资料-姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.staff_no",
            "description": "<p>认证资料-员工编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.profession_cert",
            "description": "<p>认证资料-执业编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.practice_area",
            "description": "<p>认证资料-职业资格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.effective_end",
            "description": "<p>认证资料-证件有效期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.branch_name",
            "description": "<p>认证资料-所在营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.region_name",
            "description": "<p>员工信息展示-执业地域</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2040"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2041",
    "title": "CRH-SNP2041-更新当前登录用户的子账户信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>子账户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resMap",
            "description": "<p>更新结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2041"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2043",
    "title": "CRH-SNP2043-获取渠道可选营业部列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "branchList",
            "description": "<p>可选营业部列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_name",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.up_branch_no",
            "description": "<p>上级营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_type",
            "description": "<p>营业部类型，对应数据字典1010</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.status",
            "description": "<p>营业部状态 8：正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.province_code",
            "description": "<p>省份代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.city_code",
            "description": "<p>城市代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.region_name",
            "description": "<p>区域名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.zipcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.telephone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.service_phone",
            "description": "<p>服务电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.description",
            "description": "<p>说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.addr_longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.addr_latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否还有下一页</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2043"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2044",
    "title": "CRH-SNP2044-获取渠道关联的银行列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>可选村管银行列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.bank_no",
            "description": "<p>编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.bank_name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.bank_type",
            "description": "<p>类型，对应数据字典10101</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.status",
            "description": "<p>状态，8：正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2044"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2048",
    "title": "CRH-SNP2048-用户注册",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_code",
            "description": "<p>短信验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source_info",
            "defaultValue": "jjb",
            "description": "<p>来源</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_code",
            "description": "<p>经纪人邀请码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>访问令牌 放header里</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2048"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2049",
    "title": "CRH-SNP2049-校验手机号是否已注册",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "register",
            "description": "<p>注册标志，0：未注册，1：已注册</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2049"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2051",
    "title": "CRH-SNP2051-通过手机号查询经纪人信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "brokerinfoReq",
            "description": "<p>经纪人信息对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfoReq.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_way",
            "description": "<p>途径  0：微信注册(西南证券)来源经纪人，other：非微信注册来源经纪人</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "brokerinfo",
            "description": "<p>经纪人信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_mobile",
            "description": "<p>经纪人手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wechat_id",
            "description": "<p>微信账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_name",
            "description": "<p>分支名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2051"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2052",
    "title": "CRH-SNP2052-检查身份证号是否被注册",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_no",
            "description": "<p>身份证号码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "register",
            "description": "<p>指定标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2052"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2053",
    "title": "CRH-SNP2053-准经纪人注册(保存准经纪人信息)",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_code",
            "description": "<p>邀请人邀请编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>mac地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type",
            "description": "<p>员工类型，对应数据字典11214</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2053"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2054",
    "title": "CRH-SNP2054-获取附近营业部",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "province_name",
            "description": "<p>省份名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_name",
            "description": "<p>城市名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tempList",
            "description": "<p>营业部列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BranchAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2054"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2055",
    "title": "CRH-SNP2055-获取全部营业部",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "province_code",
            "description": "<p>省份代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_code",
            "description": "<p>城市代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tempList",
            "description": "<p>营业部列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BranchAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2055"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2057",
    "title": "CRH-SNP2057-获取签约邀请码",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>查询个数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>分享标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summery",
            "description": "<p>分享摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inviteUrl",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BrokerExtendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2057"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2058",
    "title": "CRH-SNP2058-获取邀约人的邀请码",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2058"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2059",
    "title": "CRH-SNP2059-经纪人绑定手机号",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_code",
            "description": "<p>短信验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>mac地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_type",
            "description": "<p>员工类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2059"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2066",
    "title": "CRH-SNP2063-增加分享记录",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_user",
            "description": "<p>分享人（user_id）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_kind",
            "description": "<p>分享类型， 1.今日观点 2.图说财经 3.投顾观点 4.图说财经外链  5：热点概念子资讯</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_no",
            "description": "<p>分享内容唯一id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_title",
            "description": "<p>分享标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_location",
            "description": "<p>分享位置（分享发出位置）1：app，2：微店</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share_url",
            "description": "<p>分享链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_info",
            "description": "<p>访问来源，wechat：微信，friends：朋友圈，qq：qq，qzone：QQ空间，msg：短信，sina：新浪微博</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ShareTemplateAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2066",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2069",
    "title": "CRH-SNP2069-登录用户所有渠道的客户列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limits_flag",
            "description": "<p>开户状态，-1时表示不传查询所有状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>搜索条件：手机号或者用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page_num",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page_size",
            "description": "<p>分页长度</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否有下一页</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "customerList",
            "description": "<p>客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.user_id",
            "description": "<p>客户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.user_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.mobile_tel",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.open_status",
            "description": "<p>开户进度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.open_status_str",
            "description": "<p>进度描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.flag",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.user_flow_status",
            "description": "<p>开户详细步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.user_flow_status_str",
            "description": "<p>开户详细步骤描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.user_flow_score",
            "description": "<p>步骤字符数组，每个标志0表示已做，1表示未做</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.create_date",
            "description": "<p>创建时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.update_date",
            "description": "<p>更新时间，格式yyyy/MM/dd hh:mm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2069"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2071",
    "title": "CRH-SNP2071-联系人信息  包括3大类：存量客户  开户中  潜在客户(只有江海用)",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>联系人id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_name",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_time_string",
            "description": "<p>更新时间串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "clientbasicinfo",
            "description": "<p>客户基本信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.client_id",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.branch_no",
            "description": "<p>分支机构</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.full_name",
            "description": "<p>账户全称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.aml_risk_level",
            "description": "<p>反洗钱风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.corp_risk_level",
            "description": "<p>客户风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.asset_level",
            "description": "<p>资产等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.user_gender",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.birthday",
            "description": "<p>出生日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.address",
            "description": "<p>联系地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.organ_flag",
            "description": "<p>机构标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.phone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.email_str",
            "description": "<p>电子邮件地址串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.client_status",
            "description": "<p>客户状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.zipcode",
            "description": "<p>邮政编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.memo",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.en_invest_kind",
            "description": "<p>投资品种字符串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.en_invest_term",
            "description": "<p>投资期限字符串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.contact",
            "description": "<p>联系人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.client_level",
            "description": "<p>客户级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.score",
            "description": "<p>分数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.cust_sleep_type",
            "description": "<p>客户休眠类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.cust_alleyway_type",
            "description": "<p>客户通道类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.is_install_clientapp",
            "description": "<p>是否安装客户端app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.commission_rate",
            "description": "<p>佣金比率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.general_asset_account",
            "description": "<p>普通资金账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.fund_account_crdt",
            "description": "<p>信用资产账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.id_kind",
            "description": "<p>证件类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientbasicinfo.id_no",
            "description": "<p>证件号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap",
            "description": "<p>投资者最新数据快照</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.init_date",
            "description": "<p>交易日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.client_id",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.fund_account",
            "description": "<p>资产账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.asset_prop",
            "description": "<p>资产属性</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_debit",
            "description": "<p>负债总额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_market_value",
            "description": "<p>客户总市值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.cash_balance",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.day_gross_fare",
            "description": "<p>日毛佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.day_net_fare",
            "description": "<p>日净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_gross_fare",
            "description": "<p>累计毛佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_net_fare",
            "description": "<p>累计净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_deal_balance",
            "description": "<p>累计成交金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.last_trade_date",
            "description": "<p>上一交易日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.deal_balance",
            "description": "<p>成交金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.month_total_balance",
            "description": "<p>本月合计金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.mon_gross_fare",
            "description": "<p>月毛佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.mon_net_fare",
            "description": "<p>月净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.credit_net_fare",
            "description": "<p>信用账户净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.openended_fund_asset",
            "description": "<p>开发式基金资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.csfc_asset",
            "description": "<p>客户总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.month_credit_net_fare",
            "description": "<p>月信用佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientdatadailysnap.month_credit_fare",
            "description": "<p>月信用净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfo",
            "description": "<p>投资者信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactInfo",
            "description": "<p>联系人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2071"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2072",
    "title": "CRH-SNP2072 移除联系人(潜在用户)-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>客户id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2072",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2073",
    "title": "CRH-SNP2073 修改联系人(潜在客户)-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>客户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>客户手机号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2073",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2074",
    "title": "CRH-SNP2074 新增联系人(潜在用户)-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>客户手机号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2074",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2078",
    "title": "CRH-SNP2078 手机通讯录联系人过滤",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>客户对象列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2078",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2079",
    "title": "CRH-SNP2079 批量导入联系人(潜在客户)-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>客户对象列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2079",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2080",
    "title": "CRH-SNP2080-查询经纪人标签列表-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data.list",
            "description": "<p>客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2080"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2082",
    "title": "CRH-SNP2082-删除标签-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_id",
            "description": "<p>标签id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2082",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2083",
    "title": "CRH-SNP2083-新增或者修改标签-兼容江海证券",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_id",
            "description": "<p>默认为空为新增标签非空为修改标签</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_name",
            "description": "<p>标签名称</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2083",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2084",
    "title": "CRH-SNP2084-查询用户标签",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>人员id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2084",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2086",
    "title": "CRH-SNP2086-标签下新增客户",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_id",
            "description": "<p>标签id</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "person_id",
            "description": "<p>潜在客户id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2086",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2086",
    "title": "CRH-SNP2086-标签下新增客户",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>格式 [{tag_id:'12123123',tag_name:'测试1'},{tag_name:'测试2'}]</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2086",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2088",
    "title": "CRH-SNP2088-标签下删除客户",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_id",
            "description": "<p>标签id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>潜在客户id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_TagAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2088",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2091",
    "title": "CRH-SNP2091-查询单个用户服务记录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.serial_no",
            "description": "<p>服务记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.person_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.snp_account",
            "description": "<p>经纪人user_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time_string",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/JjbVisitRecordAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2091"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2093",
    "title": "CRH-SNP2093-增加服务记录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>联系人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>经纪人user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_time_string",
            "description": "<p>创建时间串，格式yyyy-MM-dd HH:mm</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/JjbVisitRecordAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2093",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2100",
    "title": "CRH-SNP2100-发送验证码到邮件",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "e_mail",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2100",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2101",
    "title": "CRH-SNP2101-验证码校验绑定邮箱",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "e_mail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2101",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP2102",
    "title": "CRH-SNP2102-邮箱是否存在",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "e_mail",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "register",
            "description": "<p>指定标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp2102"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3011",
    "title": "CRH-SNP3011-我的业绩",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>月份</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "resMap",
            "description": "<p>我的业绩</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.mon_net_fare0",
            "description": "<p>净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.mon_fare0",
            "description": "<p>净佣金收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.mon_count0",
            "description": "<p>客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3011"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3012",
    "title": "CRH-SNP3012-邀约邀请树型结构",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "all_count0",
            "description": "<p>客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_count",
            "description": "<p>邀请数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父账户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>等级</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "relation",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.all_count0",
            "description": "<p>客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.invite_count",
            "description": "<p>邀请数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.parent_id",
            "description": "<p>父账户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relation.level",
            "description": "<p>等级</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "relation.relation",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/PerformanceAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3012"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3013",
    "title": "CRH-SNP3013-排行榜月排行",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页长</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qry_date",
            "description": "<p>协议列表内容拼接</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "loginuserRank",
            "description": "<p>登录用户排名信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.init_date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.broker_type",
            "description": "<p>经纪人类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.mon_count0",
            "description": "<p>月结算数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.year_count0",
            "description": "<p>年结算数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.all_count0",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.mon_count1",
            "description": "<p>月结算数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.year_count1",
            "description": "<p>年结算数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.all_count1",
            "description": "<p>总数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.mon_net_fare",
            "description": "<p>月净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.mon_net_fare_income",
            "description": "<p>月净佣金收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.total_net_fare",
            "description": "<p>总净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.total_net_fare_income",
            "description": "<p>总净佣金收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.data_date",
            "description": "<p>数据格式日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.rank1",
            "description": "<p>排名1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.rank2",
            "description": "<p>排名2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.rank3",
            "description": "<p>排名3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.rank4",
            "description": "<p>排名4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.rank5",
            "description": "<p>排名5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.total_balance",
            "description": "<p>总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.trade_netfare_sum",
            "description": "<p>交易净费用之和</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.trade_netfare_inconme_sum",
            "description": "<p>交易净费用收入之和</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginuserRank.user_name",
            "description": "<p>经纪人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rankList",
            "description": "<p>排名列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.init_date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.broker_type",
            "description": "<p>经纪人类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_count0",
            "description": "<p>月结算数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.year_count0",
            "description": "<p>年结算数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.all_count0",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_count1",
            "description": "<p>月结算数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.year_count1",
            "description": "<p>年结算数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.all_count1",
            "description": "<p>总数量1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_net_fare",
            "description": "<p>月净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_net_fare_income",
            "description": "<p>月净佣金收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_net_fare",
            "description": "<p>总净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_net_fare_income",
            "description": "<p>总净佣金收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.data_date",
            "description": "<p>数据格式日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.rank1",
            "description": "<p>排名1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.rank2",
            "description": "<p>排名2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.rank3",
            "description": "<p>排名3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.rank4",
            "description": "<p>排名4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.rank5",
            "description": "<p>排名5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_balance",
            "description": "<p>总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.trade_netfare_sum",
            "description": "<p>交易净费用之和</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.trade_netfare_inconme_sum",
            "description": "<p>交易净费用收入之和</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.user_name",
            "description": "<p>经纪人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/PerformanceAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3013"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3015",
    "title": "CRH-SNP3015-查询邀约邀请记录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>结果集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.address",
            "description": "<p>经纪人地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.bank_account",
            "description": "<p>经纪人银行账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_image",
            "description": "<p>经纪人图像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_level",
            "description": "<p>经纪人等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_status",
            "description": "<p>经纪人状态（0:有效 1:无效 4:注册中）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_status_str",
            "description": "<p>经纪人状态描述（有效 无效 注册中）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.broker_type",
            "description": "<p>经纪人类型（9：经纪人1：理财序列2：主管序列）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.company_name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.duty_name",
            "description": "<p>值班姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.duty_tel",
            "description": "<p>值班电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.e_mail",
            "description": "<p>经纪人邮件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.marketing_flag",
            "description": "<p>营销标志  0：不可营销 1：可营销</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobile_tel",
            "description": "<p>经纪人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.office_tel",
            "description": "<p>办公室电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.organ_code",
            "description": "<p>机构代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.organ_flag",
            "description": "<p>经纪人角色（0内部经纪人）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.parent_id",
            "description": "<p>父账户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.partner_code",
            "description": "<p>合作方编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.profession_cert",
            "description": "<p>证书编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.qq",
            "description": "<p>QQ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.source_info",
            "description": "<p>经纪人来源（crm,oa）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_no",
            "description": "<p>员工编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_id",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_type",
            "description": "<p>用户类别 1：客户，2：经纪人，3：操作员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.web_record",
            "description": "<p>web记录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.wechat_id",
            "description": "<p>微信号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList",
            "description": "<p>经纪人签约流水记录</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.serial_no",
            "description": "<p>经纪人签约流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.snp_account",
            "description": "<p>经纪人营销账号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.business_flag",
            "description": "<p>业务编号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.business_name",
            "description": "<p>业务名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.business_status",
            "description": "<p>业务状态</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.operator_no",
            "description": "<p>操作人员编号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.operator_name",
            "description": "<p>操作人员姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.memo",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.flowList.create_time_string",
            "description": "<p>创建日期字符串形式</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/PerformanceAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3015"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3016",
    "title": "CRH-SNP3016-邀请用户详情",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/PerformanceAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3016"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3017",
    "title": "CRH-SNP3017-经纪人工资信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>月份</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "resMap",
            "description": "<p>经纪人工资信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.income_all",
            "description": "<p>提成</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.segment_ext1",
            "description": "<p>普通提成</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.segment_ext2",
            "description": "<p>产品收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.segment_ext3",
            "description": "<p>邀请收入</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.segment_ext4",
            "description": "<p>信用提成</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.segment_ext5",
            "description": "<p>扣罚</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3017"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3020",
    "title": "CRH-SNP3020-查询用户统计信息 clientdatasnap资产净佣金净佣金收入",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>月份（201904）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_type",
            "description": "<p>交易量排行 deal_balance 普通账户净佣金排行 net_fare 信用账户净佣金排行 credit_net_fare total_asset总资产</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页长</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "rankList",
            "description": "<p>排名列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.deal_balance_month_sum",
            "description": "<p>月总交易量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.net_fare_month_sum",
            "description": "<p>月净佣金（普通账户）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.credit_net_fare_month_sum",
            "description": "<p>月净佣金（信用账户）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.init_date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.fund_account",
            "description": "<p>基金账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.asset_prop",
            "description": "<p>资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_debit",
            "description": "<p>总负债</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_market_value",
            "description": "<p>市场总值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.cash_balance",
            "description": "<p>余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.day_gross_fare",
            "description": "<p>日毛收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.day_net_fare",
            "description": "<p>日净收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.deal_balance",
            "description": "<p>交易量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_gross_fare",
            "description": "<p>总毛收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_net_fare",
            "description": "<p>总净收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.total_deal_balance",
            "description": "<p>总交易量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.last_trade_date",
            "description": "<p>上一交易日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.month_total_balance",
            "description": "<p>月总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_gross_fare",
            "description": "<p>月毛费用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.mon_net_fare",
            "description": "<p>月净费用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.credit_net_fare",
            "description": "<p>净佣金（信用账户）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.openended_fund_asset",
            "description": "<p>开放式基金资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.csfc_asset",
            "description": "<p>客户总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.month_credit_net_fare",
            "description": "<p>上月信用净佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rankList.month_credit_fare",
            "description": "<p>上月信用佣金</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3020"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3021",
    "title": "CRH-SNP3021-通过资产区间查询客户列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_start",
            "description": "<p>资产值起点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_end",
            "description": "<p>资产值终点</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "has_next",
            "description": "<p>是否还有下一个</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "customerList",
            "description": "<p>用户统计信息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.client_id",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customerList.mobile_tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3021"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3022",
    "title": "CRH-SNP3022-查询客户区间资产情况",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fund_account",
            "description": "<p>资金账号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day_num",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resList",
            "description": "<p>客户区间资产列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3022"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3023",
    "title": "CRH-SNP3023-添加子账户",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "AddSubAccountForm",
            "optional": false,
            "field": "form",
            "description": "<p>子账户信息对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.broker_status",
            "description": "<p>经纪人状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.broker_name",
            "description": "<p>经纪人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.broker_no",
            "description": "<p>经纪人编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub_user_id",
            "description": "<p>子账户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3023"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3024",
    "title": "CRH-SNP3024-取未读动态条数",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>联系人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "read_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>客户动态条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3024"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3025",
    "title": "CRH-SNP3025-客户贡献明细",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data",
            "description": "<p>列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.init_date",
            "description": "<p>日期20190101</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.broker_day_total_asset",
            "description": "<p>总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.broker_day_deal_balance",
            "description": "<p>总交易量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.broker_day_net_fare",
            "description": "<p>净佣金（普通账户）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.broker_day_credit_net_fare",
            "description": "<p>净佣金（信用账户）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3025"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3026",
    "title": "CRH-SNP3026-退出登录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "HttpServletRequest",
            "optional": false,
            "field": "request",
            "description": "<p>HttpServletRequest对象</p>"
          },
          {
            "group": "Parameter",
            "type": "HttpServletResponse",
            "optional": false,
            "field": "response",
            "description": "<p>HttpServletResponse对象</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3026",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3042",
    "title": "CRH-SNP3042-新的活动详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>页面url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_ext1",
            "description": "<p>广告位1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_ext2",
            "description": "<p>广告位2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_ext3",
            "description": "<p>广告位3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_ext4",
            "description": "<p>广告位4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_ext5",
            "description": "<p>广告位5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_location",
            "description": "<p>广告位置</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_share_imageUrl",
            "description": "<p>分享图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_share_summary",
            "description": "<p>分享概要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adv_share_title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>appId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apps_scope",
            "description": "<p>分享范围</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_custom",
            "description": "<p>常规按钮</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_custom_target",
            "description": "<p>按钮目标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_custom_txt",
            "description": "<p>按钮文本</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_custom_url",
            "description": "<p>按钮链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_kaihu",
            "description": "<p>开户按钮</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "button_sign",
            "description": "<p>签约按钮</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_end",
            "description": "<p>有效截止日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_start",
            "description": "<p>有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jsapi_ticket",
            "description": "<p>分享票据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>链接url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login_flag",
            "description": "<p>登录标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qrcode_url",
            "description": "<p>开户渠道url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_code",
            "description": "<p>分享码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>分享签名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>页面url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_JjbmotmsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3042"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3052",
    "title": "CRH-SNP3052-保存签约用户营业部信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3052",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3055",
    "title": "CRH-SNP3055-获取签约流程协议",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreement_no",
            "description": "<p>协议编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreement_version",
            "description": "<p>协议版本号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data",
            "description": "<p>协议内容图片列表（list中为base64字符串）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3055"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3056",
    "title": "CRH-SNP3056-签署签约流程协议",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "econtract_no",
            "description": "<p>电子合同编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "econtract_name",
            "description": "<p>电子合同名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "econtract_md5",
            "description": "<p>电子合同MD5值</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "sign_value",
            "description": "<p>签名内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "digest_info",
            "description": "<p>摘要信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cert_sn",
            "description": "<p>证书序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "saved_flag",
            "defaultValue": "false",
            "description": "<p>保存标志（true保存，false非保存）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3056",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3057",
    "title": "CRH-SNP3057-申请流水列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "brokerinfoapplyflow",
            "description": "<p>流水列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.serial_no",
            "description": "<p>流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.snp_account",
            "description": "<p>营销人员编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.business_flag",
            "description": "<p>业务编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.business_name",
            "description": "<p>业务名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.business_status",
            "description": "<p>业务状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.operator_no",
            "description": "<p>操作员编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.operator_name",
            "description": "<p>操作员姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.memo",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfoapplyflow.create_time_string",
            "description": "<p>创建时间字符串形式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3057"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3058",
    "title": "CRH-SNP3058-获取业务协议列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "busin_type",
            "description": "<p>业务类型，crh_user.businesstype表busin_type字段值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>协议列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_no",
            "description": "<p>协议编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_type",
            "description": "<p>协议类型（数据字典1501）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_version",
            "description": "<p>协议版本</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content_md5",
            "description": "<p>内容MD5码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count_down",
            "description": "<p>倒计时长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.publish_date",
            "description": "<p>发布日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.valid_date",
            "description": "<p>有效日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_content_type",
            "description": "<p>协议内容类型，1：文本，2：文件，3：url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.busin_type",
            "description": "<p>业务类型，crh_user.businesstype表busin_type字段值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.prod_code",
            "description": "<p>产品编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.company_code",
            "description": "<p>公司编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.order_flag",
            "description": "<p>机构标示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.archfile_no",
            "description": "<p>档案文件编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sign_way",
            "description": "<p>签署方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.agreement_content_path",
            "description": "<p>协议内容路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.econtract_content",
            "description": "<p>电子合同内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3058"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3059",
    "title": "CRH-SNP3059-获取用户签约信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentMap",
            "description": "<p>签约信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detail_address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "e_mail",
            "description": "<p>邮件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_gender",
            "description": "<p>性别(男，女)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_address",
            "description": "<p>身份证地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_begindate",
            "description": "<p>身份证有效起始日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_enddate",
            "description": "<p>身份证有效截止日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issued_depart",
            "description": "<p>使用部门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contract_valid",
            "description": "<p>合同有效值（默认3）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_valid",
            "description": "<p>有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_valid",
            "description": "<p>有效结束日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3059"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3060",
    "title": "CRH-SNP3060-解约信息修改",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>解约用户编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3060"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3061",
    "title": "CRH-SNP3061-获取用户解约信息",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_gender",
            "description": "<p>性别(男，女)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_address",
            "description": "<p>身份证地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contract_valid",
            "description": "<p>合同有效值（默认3）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_valid",
            "description": "<p>有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_valid",
            "description": "<p>有效结束日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/BrokerSignAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3061"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3062",
    "title": "CRH-SNP3062-获取营业部套餐列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchNo",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "data",
            "description": "<p>结果集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.package_id",
            "description": "<p>套餐id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.branch_no",
            "description": "<p>营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.package_name",
            "description": "<p>套餐名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data.packageagreementList",
            "description": "<p>协议列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.prod_code",
            "description": "<p>产品编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_no",
            "description": "<p>协议编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_type",
            "description": "<p>协议类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_version",
            "description": "<p>协议版本</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.content_md5",
            "description": "<p>内容MD5码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.busin_type",
            "description": "<p>业务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.econtract_content",
            "description": "<p>电子协议内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.sign_way",
            "description": "<p>签约方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.archfile_no",
            "description": "<p>档案文件编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_content_type",
            "description": "<p>协议内容类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.agreement_content_path",
            "description": "<p>协议内容路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.fare_sort",
            "description": "<p>佣金类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.packageagreementList.order_num",
            "description": "<p>排序编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3062"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3063",
    "title": "CRH-SNP3063-获取套餐协议列表内容",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageId",
            "description": "<p>packageId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementAllContentList",
            "description": "<p>协议列表内容拼接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "agreementAllContent",
            "description": "<p>协议列表内容拼接</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList",
            "description": "<p>协议列表</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.econtract_doctype",
            "description": "<p>电子协议类型</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.econtract_id",
            "description": "<p>电子合同编号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.econtract_name",
            "description": "<p>电子合同名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.econtract_md5",
            "description": "<p>电子合同MD5</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.econtract_content",
            "description": "<p>电子合同内容</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementList.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3063"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3064",
    "title": "CRH-SNP3064-获取佣金分成列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageId",
            "description": "<p>packageId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreement_no",
            "description": "<p>协议编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "default",
            "description": "<p>（2提成收入4营业部净利）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "list",
            "description": "<p>提成收入或营业部净利列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3064"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3065",
    "title": "CRH-SNP3065-获取签约流程协议",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3065"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3066",
    "title": "CRH-SNP3066-获取替换字符后的合同文档",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreement_no",
            "description": "<p>协议编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreement_version",
            "description": "<p>协议版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageId",
            "description": "<p>packageId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_name",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commission_str",
            "description": "<p>提成</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "agreementContentList",
            "description": "<p>协议内容列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3066"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3067",
    "title": "CRH-SNP3067-保存签署后合同信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "econtract_no",
            "description": "<p>协议编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "econtract_name",
            "description": "<p>协议名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "econtract_md5",
            "description": "<p>协议md5加密串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign_value",
            "description": "<p>签名值</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "digest_info",
            "description": "<p>摘要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cert_sn",
            "description": "<p>证书编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "saved_flag",
            "description": "<p>保存标志（true保存，false非保存）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>流程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": ""
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PackageAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3067"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3200",
    "title": "CRH-SNP3200-根据经纪人用户id查询不同开户进度用户数量",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "accountCount",
            "description": "<p>账户选择数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "callbackCount",
            "description": "<p>问卷回访数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "checkCount",
            "description": "<p>任务审核数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "deposityCount",
            "description": "<p>三方存管数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "idUploadCount",
            "description": "<p>证件上传数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "passwordCount",
            "description": "<p>密码设置数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "profileCount",
            "description": "<p>资料提交数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "protocalCount",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "reCheckCount",
            "description": "<p>任务复核数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "registerCount",
            "description": "<p>开户注册数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "riskCount",
            "description": "<p>风险测评数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "videoCount",
            "description": "<p>视频验证数量</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3200"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3201",
    "title": "CRH-SNP3201-根据经纪人用户id和开户标志位查询不同开户进度用户列表",
    "description": "<ol>         <li>作者：liwei</li>      </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business_flag",
            "description": "<p>开户标志位,开户进度状态business_flag:0、用户注册 1、证件上传 2、基本资料填写 3、视频认证 4、协议 5、账户选择 6、三方存管 7、基金8、风险评测 9、回访 10、密码设置 11、任务审核 12、任务复核13、税收证明</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "investorInfoList",
            "description": "<p>开户进度用户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.client_name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.update_time_string",
            "description": "<p>时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3201"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3202",
    "title": "CRH-SNP3202-根据经纪人用户id和用户id查询用户开户进度详情",
    "description": "<ol>     <li>作者：liwei</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kh_user_id",
            "description": "<p>开户用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "openUser",
            "description": "<p>用户开户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openUser.client_name",
            "description": "<p>用户开户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openUser.mobile_tel",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openUser.appId",
            "description": "<p>用户来源</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "openStepJourList",
            "description": "<p>用户开户进度详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3202"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3203",
    "title": "CRH-SNP3203-根据用户名称手机号查询用户",
    "description": "<ol>     <li>作者：liwei</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query_keywords",
            "description": "<p>查询关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updateStart",
            "description": "<p>更新开始日期，日期格式：yyyyMMdd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updateEnd",
            "description": "<p>更新结束日期，日期格式：yyyyMMdd</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "clientList",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientList.client_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientList.mobile_tel",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3203"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3204",
    "title": "CRH-SNP3204-根据经纪人用户id查询不同开户进度用户数量",
    "description": "<ol>     <li>作者：liwei</li>     <li>浙商用</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_type",
            "description": "<p>查询时间类型(0：全部；1：最近一周；2：最近一月；3：最近三个月；4：最近6个月；5：最近一年)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>数组对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.type",
            "description": "<p>流程类型（即business_flag；22121：待整改客户,22107：在证件上传步骤,12104：在视频验证步骤,22113：在三方存管步骤,40005：三方存管绑定失败,33213：开户成功,40003：转户失败）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.count",
            "description": "<p>流程数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3204"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3205",
    "title": "CRH-SNP3205-根据经纪人用户id和开户标志位查询不同开户进度用户列表",
    "description": "<ol>     <li>作者：liwei</li>     <li>浙商用</li>     </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acc_user_id",
            "description": "<p>查询用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_type",
            "description": "<p>查询时间类型(0：全部；1：最近一周；2：最近一月；3：最近三个月；4：最近6个月；5：最近一年)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>业务标志（即business_flag；22121：待整改客户,22107：在证件上传步骤,12104：在视频验证步骤,22113：在三方存管步骤,40005：三方存管绑定失败,33213：开户成功,40003：转户失败）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "investorInfoList",
            "description": "<p>开户进度用户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.client_name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "investorInfoList.update_time_string",
            "description": "<p>时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_PromotionAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3205"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP3350",
    "title": "CRH-SNP3350-获取app端传入的埋点参数bury_action",
    "description": "<ol> \t\t<li>作者：闻达</li> \t\t<li>说明：埋点编号+操作编号。例如：B00010其中B0001为埋点编号，末尾0代表进入页面，</li> \t\t<li>末尾如果是1代表退出页面</li> \t   </ol>",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bury_action",
            "description": "<p>埋点编号+操作编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BuryStatisticsAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp3350",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4011",
    "title": "CRH-SNP4011-记录访问次数（免登录）",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>广告信息表流水号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_JjbmotmsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4011"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4012",
    "title": "CRH-SNP4012-上传渠道logo",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageData",
            "description": "<p>图片base64串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shortCode",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_UploadLogoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4012",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4023",
    "title": "CRH-SNP4023-分页获取账户未完成的待办事项",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>开始记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>截止记录数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "backloginfoList",
            "description": "<p>待办事项信息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.event_no",
            "description": "<p>事件编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.snp_account",
            "description": "<p>营销人员编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.busi_content",
            "description": "<p>业务内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.update_datetime",
            "description": "<p>更新日期yyyy-MM-dd HH:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.finish_datetime",
            "description": "<p>完成日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backloginfoList.status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BackloginfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4023"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4024",
    "title": "CRH-SNP4024-更新待办事项",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event_no",
            "description": "<p>事件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "busi_content",
            "description": "<p>业务内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BackloginfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4024"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4025",
    "title": "CRH-SNP4025-删除待办事项",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event_no",
            "description": "<p>事件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BackloginfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4025"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4026",
    "title": "CRH-SNP4026-更新待办事项",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event_no",
            "description": "<p>事件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "busi_content",
            "description": "<p>业务内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_BackloginfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp4026"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5000",
    "title": "CRH-SNP5000-获取登录用户的菜单",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_id",
            "description": "<p>菜单id（默认后台配置app菜单根节点id）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MenuAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5000",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5001",
    "title": "CRH-SNP5001-获取登录用户的菜单，包括服务和我的菜单模块",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>菜单版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "service",
            "description": "<p>服务</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "myinfo",
            "description": "<p>我的</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MenuAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5001"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5002",
    "title": "CRH-SNP5002-全局客户搜索接口/兼容潜在客户搜索/兼容标签搜索",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>客户姓名或手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag_id",
            "description": "<p>默认为空 传入标签id查询该标签下所有客户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "self_tag_id",
            "description": "<p>-1：表示模糊查询非本标签下的客户，非-1：表示目标标签剔除本标签下的客户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_info",
            "description": "<p>默认为空 传pre代表潜在用户搜索(通讯录)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_level",
            "description": "<p>客户等级多个以逗号隔开</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_install_clientapp",
            "description": "<p>是否安装汇金谷（1:已安装 0&amp;' ':未安装 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_yupe",
            "description": "<p>是否安装汇金谷（1:开发关系 2：服务关系 3：开户中 6：潜在关系-公共资源 7：潜在关系-个人资源 ）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>结束条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data",
            "description": "<p>客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobile_tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.open_status",
            "description": "<p>开户状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.finance_buy_flag",
            "description": "<p>理财产品购买标志（0：未购买，1：已购买）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.investment_bug_flag",
            "description": "<p>投顾产品购买标志（0：未购买，1：已购买 ）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.free_service_flag",
            "description": "<p>是否有可享受免费服务（0：无，1：有 ）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5002"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5004",
    "title": "CRH-SNP5004 客户详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person_id",
            "description": "<p>用户唯一标示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id_kh",
            "description": "<p>开户系统唯一标示</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "data",
            "description": "<p>客户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.client_level_zh",
            "description": "<p>客户等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.capital_account_common",
            "description": "<p>普通资金账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.capital_account_credit",
            "description": "<p>两融资金账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.en_invest_kind",
            "description": "<p>投资品种</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.en_invest_term",
            "description": "<p>投资期限</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.channel_name",
            "description": "<p>开户渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.open_date",
            "description": "<p>开户时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.branch_name",
            "description": "<p>开户营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contact",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobile_tel",
            "description": "<p>手机</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.wechat_id",
            "description": "<p>微信</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.qq",
            "description": "<p>QQ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email_str",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5004"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5005",
    "title": "CRH-SNP5005 客户资料修改",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Jjballcontact.client_name",
            "optional": false,
            "field": "person_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Jjballcontact.client_name",
            "optional": false,
            "field": "client_name",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "Jjballcontact.mobile_tel",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "Jjballcontact.qq",
            "optional": false,
            "field": "qq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Jjballcontact.wechat_id",
            "optional": false,
            "field": "wechat_id",
            "description": "<p>微信</p>"
          },
          {
            "group": "Parameter",
            "type": "Jjballcontact.email_str",
            "optional": false,
            "field": "email_str",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5005",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5006",
    "title": "CRH-SNP5006 客户模块主页",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person_count",
            "description": "<p>个人客户数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "org_count",
            "description": "<p>机构客户数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total_count",
            "description": "<p>客户总数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5006"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5012",
    "title": "CRH-SNP5012-经纪人客户数据统计（驾驶舱数据）",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：参数传入不同返回字段也不同</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1\"",
              "\"2\"",
              "\"3\""
            ],
            "optional": false,
            "field": "sumType",
            "description": "<p>统计类型，客户信息：1，佣金信息：2，资产信息：3</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year_no",
            "description": "<p>年</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month_no",
            "description": "<p>年月</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_code",
            "description": "<p>经纪人员工号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_name",
            "description": "<p>经纪人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "new_open_year",
            "description": "<p>本年新开客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "new_open_effective_year",
            "description": "<p>本年新开有效客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "new_open_effective_mon",
            "description": "<p>本月度新开有效客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "new_open_mon",
            "description": "<p>本月度新开客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "customers_normal",
            "description": "<p>当前普通卡客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "customers_gold",
            "description": "<p>当前金卡客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "customers_platinum",
            "description": "<p>当前白金卡客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "customers_diamond",
            "description": "<p>当前钻石卡客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_normal",
            "description": "<p>普通卡客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_gold",
            "description": "<p>金卡客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_platinum",
            "description": "<p>白金卡客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_diamond",
            "description": "<p>钻石卡客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hjg_download_year",
            "description": "<p>本年汇金谷下载数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hjg_trade_customers_year",
            "description": "<p>本年汇金谷交易客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hjg_download_mon",
            "description": "<p>本月汇金谷下载数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hjg_trade_customers_mon",
            "description": "<p>本月汇金谷交易客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthNewOpenMap",
            "description": "<p>近12月新增开户数</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthEffectiveOpenMap",
            "description": "<p>近12月新增有效开户数</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthHjgDownloadMap",
            "description": "<p>近12月汇金谷下载客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthHjgTradeMap",
            "description": "<p>近12月汇金谷交易客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_asset",
            "description": "<p>当前客户总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_new_year",
            "description": "<p>本年新增客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "asset_new_mon",
            "description": "<p>本月新增客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_in_year",
            "description": "<p>本年资金流入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_out_year",
            "description": "<p>本年资金流出</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_net_in_year",
            "description": "<p>本年资金净流入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_in_mon",
            "description": "<p>本月资金流入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_out_mon",
            "description": "<p>本月资金流出</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fund_net_in_mon",
            "description": "<p>本月资金净流入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_in_amount_year",
            "description": "<p>本年累计转托转入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_out_amount_year",
            "description": "<p>本年累计转托转出</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_net_in_amount_year",
            "description": "<p>本年累计转托净转入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_in_amount_mon",
            "description": "<p>本月累计转托转入</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_out_amount_mon",
            "description": "<p>本月累计转托转出</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "cbdc_net_in_amount_mon",
            "description": "<p>本月累计转托净转入</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthTotalAssetMap",
            "description": "<p>近12月客户总资产</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthNewAssetMap",
            "description": "<p>近12月年新开客户资产</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthFundInMap",
            "description": "<p>近12月资金流入</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthFundOutMap",
            "description": "<p>近12月资金流出</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthNetFundInMap",
            "description": "<p>近12月资金净流入</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthCbdcInMap",
            "description": "<p>近12月转托转入</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthCbdcOutMap",
            "description": "<p>近12月转托转出</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthNetCbdcInMap",
            "description": "<p>近12月转托净转入</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthAllCommissionMap",
            "description": "<p>近12月全部客户佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "monthNewCommissioinMap",
            "description": "<p>近12月新开客户佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_year",
            "description": "<p>年累计佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_fund_year",
            "description": "<p>A股+场内基金年累计佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_credit_year",
            "description": "<p>信用业务年累计佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_option_year",
            "description": "<p>期权业务年累计佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_new_mon",
            "description": "<p>月度新开客户佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "commission_agent_all_mon",
            "description": "<p>月度全部客户佣金贡献</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "average_rate_fund_new_year",
            "description": "<p>本年新开客户平均佣金率(A股+场内基金)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "average_rate_option_new_year",
            "description": "<p>本年新开客户平均佣金率(信用业务)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "average_rate_fund_year",
            "description": "<p>本年平均佣金率(A股+场内基金)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "average_rate_option_year",
            "description": "<p>信用业务平均佣金率</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "average_turnover_rate_year",
            "description": "<p>年累计平均周转率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/apidoc/ApiDoc.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5012"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5013",
    "title": "CRH-SNP5013-客户可享受的投顾产品",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "canBuyProductList",
            "description": "<p>未购买投顾产品列表，具体字段内容同ownProductList</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "ownProductList",
            "description": "<p>已购买投顾产品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.prod_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.prod_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.prod_price",
            "description": "<p>产品最新价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.expire_date",
            "description": "<p>产品失效时间（格式：yyyy-MM-dd），未订阅时该字段为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.effect_datetime",
            "description": "<p>产品生效时间（格式：yyyy-MM-dd HH:mm:ss），未订阅时该字段为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownProductList.total_order",
            "description": "<p>订单价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": false,
            "field": "ownProductList.is_subscribe",
            "description": "<p>订阅标志，1：已订阅，0：未订阅</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": false,
            "field": "ownProductList.is_free",
            "description": "<p>免费标志，1：免费，0：不免费</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5013"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5014",
    "title": "CRH-SNP5014-客户产品持仓列表",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：产品类型编号为productcategory表中初始化数据，不同券商可能不同，此处标注类型为浙商产品分类</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>产品类型编号，1：公募，2：私募，3：资管，4：其他</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"3\"",
              "\"4\""
            ],
            "optional": true,
            "field": "positionType",
            "defaultValue": "4",
            "description": "<p>持仓类别，3：股票，4：产品</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "total_profit",
            "description": "<p>投资总收益</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "clientpositionList",
            "description": "<p>客户产品持仓列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.product_code",
            "description": "<p>产品编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.product_short_name",
            "description": "<p>产品名称简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.category_id",
            "description": "<p>产品分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.category_name",
            "description": "<p>产品分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "clientpositionList.nav",
            "description": "<p>最新净值</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "clientpositionList.cost_price",
            "description": "<p>购买时净值（成本价）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "clientpositionList.current_amount",
            "description": "<p>持有份额</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "clientpositionList.income_ratio",
            "description": "<p>收益率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.invest_term",
            "description": "<p>投资期限，1：0到1年,2：1到5年,3：5年以上</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "clientpositionList.profit_balance",
            "description": "<p>投资收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientpositionList.product_url",
            "description": "<p>产品链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5014"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5034",
    "title": "CRH-SNP5034-长链接转短链接",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shortUrl",
            "description": "<p>短链接</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longUrl",
            "description": "<p>短链接对应的长链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ToolAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5034"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5050",
    "title": "CRH-SNP5050-我的-基础资料-上传头像",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_file",
            "description": "<p>用户头像(base_64)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resMap",
            "description": "<p>更新结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5050"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5051",
    "title": "CRH-SNP5051-我的-基础资料-修改昵称",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>用户昵称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resMap",
            "description": "<p>更新结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5051"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5052",
    "title": "CRH-SNP5052-经纪人资格考试 - 是否通过考试",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>分数 满分为100</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pass_exam",
            "description": "<p>是否通过考试</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ExamAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5052"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5053",
    "title": "CRH-SNP5053-经纪人资格考试 - 获取试卷",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "exampaper",
            "description": "<p>试卷</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "paper_id",
            "description": "<p>试卷编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ExamAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5053"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5053",
    "title": "CRH-SNP5053-经纪人资格考试 - 提交答案",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paper_answer",
            "description": "<p>试卷答案(形如：&quot;1:1^4|2:3|&quot;，1号题的答案是1和4，2号题的答案是3，最后一位也需要分隔符&quot;|&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paper_id",
            "description": "<p>试卷编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>分数 满分为70</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pass_exam",
            "description": "<p>是否通过考试</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ExamAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5053"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5055",
    "title": "CRH-SNP5055 提交留言",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message_type",
            "description": "<p>留言类型： 0 体验, 1 功能, 2 数据, 3 流程, 4 需求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5055"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5056",
    "title": "CRH-SNP5056 留言列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.user_name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.create_datetime",
            "description": "<p>时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.message_type_str",
            "description": "<p>留言类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5056"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5057",
    "title": "CRH-SNP5057 开屏广告",
    "group": "app",
    "version": "1.0.0",
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5057"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5059",
    "title": "CRH-SNP5059 留言列表",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：1、先从消息反馈表（crh_snp.messageboard）中过滤掉不属于当前用户的消息id。</li> \t\t<li>     2、过滤后的消息id作为crh_snp.msgreply表out_serial_no字段查询回复消息列表</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msgIds",
            "description": "<p>消息id，多个消息逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": true,
            "field": "ownFlag",
            "defaultValue": "0",
            "description": "<p>是否只查询自己的留言回复，0否，1是</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "replyMap",
            "description": "<p>根据消息id查询出的消息回复map，消息id为键，同一条反馈消息回复实体列表作为值</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "replyList",
            "description": "<p>根据消息id查询出的回复消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyList.serial_no",
            "description": "<p>回复消息唯一编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyList.out_serial_no",
            "description": "<p>留言id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyList.operator_no",
            "description": "<p>回复操作员用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyList.content",
            "description": "<p>回复内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyList.create_datetime",
            "description": "<p>回复时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5059"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5100",
    "title": "CRH-SNP5100-消息阅读接口",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：标记消息已阅读并返回阅读的消息列表，注意查询单条消息时返回的字段即resultList的下属字段</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id，注：消息id和消息类型只能选择其中一个传值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "showType",
            "description": "<p>显示方式，1表示客户信息显示方式，2表示图文消息显示</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.serial_no",
            "description": "<p>消息编号id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.out_serial_no",
            "description": "<p>外部消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.login_flag",
            "description": "<p>是否需要登录，1表示是，0表示否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.app_logo",
            "description": "<p>消息logo样式class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>消息有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>消息有效结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_status",
            "description": "<p>消息状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_ways",
            "description": "<p>消息推送方式，wbsocket和system系统推送两种</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.source_info",
            "description": "<p>消息来源，snp表示营销平台，kh表示开户，mot表示crm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_account",
            "description": "<p>经纪人账号</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.read_datetime",
            "description": "<p>阅读时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultList.read_count",
            "description": "<p>消息阅读数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content",
            "description": "<p>消息内容，注意：不同消息内容返回字段不一样</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.noticeContent",
            "description": "<p>消息正文（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.thumbnailUrl",
            "description": "<p>缩略图地址（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_id",
            "description": "<p>客户号（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_name",
            "description": "<p>客户名（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.comment",
            "description": "<p>备注（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.mobile_tel",
            "description": "<p>手机号（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_date",
            "description": "<p>开户日期（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.short_code",
            "description": "<p>渠道短码（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.channel_name",
            "description": "<p>渠道名称（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_way",
            "description": "<p>接入方式（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5100"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5101",
    "title": "CRH-SNP5101-消息列表查询",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：查询已读消息列表</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id（id和类型只能传一个）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"3\""
            ],
            "optional": true,
            "field": "dealStatus",
            "description": "<p>处理状态，0：未处理，1：已处理，3：已过期</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>结束条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "showType",
            "description": "<p>显示方式，1表示客户信息显示方式，2表示图文消息显示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>消息内容（查询单条消息时的内容存放字段，下属字段同resultList）</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.serial_no",
            "description": "<p>消息编号id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.out_serial_no",
            "description": "<p>外部消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.login_flag",
            "description": "<p>是否需要登录，1表示是，0表示否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.app_logo",
            "description": "<p>消息logo样式class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>消息有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>消息有效结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_status",
            "description": "<p>消息状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_ways",
            "description": "<p>消息推送方式，wbsocket和system系统推送两种</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.source_info",
            "description": "<p>消息来源，snp表示营销平台，kh表示开户，mot表示crm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_account",
            "description": "<p>经纪人账号</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.read_datetime",
            "description": "<p>阅读时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultList.read_count",
            "description": "<p>消息阅读数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.recordContent",
            "description": "<p>服务记录说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.recordId",
            "description": "<p>服务记录Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content",
            "description": "<p>消息内容，注意：不同消息内容返回字段不一样</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.noticeContent",
            "description": "<p>消息正文（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.thumbnailUrl",
            "description": "<p>缩略图地址（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_id",
            "description": "<p>客户号（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_name",
            "description": "<p>客户名（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.comment",
            "description": "<p>备注（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.mobile_tel",
            "description": "<p>手机号（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_date",
            "description": "<p>开户日期（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.short_code",
            "description": "<p>渠道短码（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.channel_name",
            "description": "<p>渠道名称（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_way",
            "description": "<p>接入方式（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5101"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5102",
    "title": "CRH-SNP5102-查询消息列表最新消息摘要及消息数量等",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：用于获取每种消息类型的最新的摘要、标题、时间以及未读消息数等</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息简要列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.logo",
            "description": "<p>消息logo样式class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.num",
            "description": "<p>消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.time",
            "description": "<p>发送时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.type",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5102"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5103",
    "title": "CRH-SNP5103-查询树状消息列表最新消息摘要及消息数量等",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：树形结构展示每种消息类型的最新的摘要、标题、时间以及未读消息数等</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息简要列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.logo",
            "description": "<p>消息logo的class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.num",
            "description": "<p>消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.time",
            "description": "<p>发送时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.type",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.typeName",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.menuId",
            "description": "<p>消息对应的菜单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.menuName",
            "description": "<p>消息对应的菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.unReadNum",
            "description": "<p>未读消息数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.orderNum",
            "description": "<p>菜单排序字段</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.styleClass",
            "description": "<p>显示样式class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.actionUrl",
            "description": "<p>请求路径（消息类暂未启用）</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList.childList",
            "description": "<p>子菜单消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5103"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5104",
    "title": "CRH-SNP5104-消息接收设置",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：设置每种消息类型的接收状态，接收开关关闭后将不再推送此种类型消息给客户</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0,1\""
            ],
            "optional": false,
            "field": "notice_receive_status",
            "description": "<p>消息接收状态，1表接收，0表示不接收</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5104",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5105",
    "title": "CRH-SNP5105-消息接收设置列表查询",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：查询用户权限内的消息列表以及对应的列表消息接收设置</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_receive_status",
            "description": "<p>消息接收状态，1表接收，0表不接收</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5105"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5106",
    "title": "CRH-SNP5106-标记消息发送成功",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：用于消息通过websocket推送后客户端收到消息后回调来标记消息接收成功，否则未被标记发送成功还会继续推送消息给客户</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5106",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5107",
    "title": "CRH-SNP5107-查询未读消息数",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：若消息类型为空表示查询所欲消息未读数，若不为空表示查询某类消息未读数</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型编号（可不填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "unReadNum",
            "description": "<p>未读消息数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5107"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5108",
    "title": "CRH-SNP5108-查询配置的websocket地址",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：地址在后台配置，前缀不加http，地址默认取值：backend.xpe.com/snp/webSocketServer</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSocketUrl",
            "description": "<p>展业app的websocket地址</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5108",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5109",
    "title": "CRH-SNP5109-添加服务记录",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceObjId",
            "description": "<p>服务对象id，如：消息id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceType",
            "defaultValue": "1",
            "description": "<p>服务类型，1：mot消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subBusinType",
            "description": "<p>子类型，如：消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceWay",
            "description": "<p>服务方式， 1：打电话，2：拜访，3：发短信</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>服务说明（最大长度为2000字节）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "syncCrmFlag",
            "description": "<p>同步到crm标志，0：不同步，1同步（默认）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5109",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5110",
    "title": "CRH-SNP5110-查询服务记录",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：serviceObjId为空表示查询列表，列表范回字段通单条数据，列表字段为resultList，如：resultList.serviceId 服务记录id</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceType",
            "defaultValue": "1",
            "description": "<p>服务类型，1：mot消息，2：开户类消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subBusinType",
            "description": "<p>子类型，如：消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceObjId",
            "description": "<p>服务对象id，如：消息id； （不传时表示查询用户所有服务记录列表）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页起始数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>分页结束数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy",
            "defaultValue": "create_datetime",
            "description": "<p>)] 排序字段名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序，选择升序或者降序，asc：升序，desc：降序</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": "<p>服务记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceObjId",
            "description": "<p>服务对象id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceType",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceWay",
            "description": "<p>服务方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>服务说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "syncCrmFlag",
            "description": "<p>同步标志，0：未同步，1：已同步</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "taskCreateDateTime",
            "description": "<p>服务记录创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "taskUpdateDateTime",
            "description": "<p>服务记录更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeTitle",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeTypeName",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeSummary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeCreateDateTime",
            "description": "<p>消息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeReadDateTime",
            "description": "<p>消息阅读时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobileTel",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5110"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5111",
    "title": "CRH-SNP5111-查询服务记录数量",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceType",
            "defaultValue": "1",
            "description": "<p>服务类型，1：mot消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subBusinType",
            "description": "<p>子类型，如：消息类型编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "serviceRecordCount",
            "description": "<p>服务记录数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5111"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5112",
    "title": "CRH-SNP5112-根据条件查询已读消息数量",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：参数都不传表示查询用户所有已读消息数</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "noticeTypeNo",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": true,
            "field": "dealStatus",
            "description": "<p>处理状态，0：未处理，1：已处理，支持多状态，以逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"snp\"",
              "\"mot\""
            ],
            "optional": true,
            "field": "sourceInfo",
            "description": "<p>消息来源，取值snp表示营销平台消息，mot表示crm消息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "noticeCount",
            "description": "<p>消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "count_",
            "description": "<p>{dealStatus} 处理状态为多个值时返回键值对数量，键为：count_+处理状态，如处理状态为1，则键为count_1</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalCount",
            "description": "<p>总数量，处理状态为多个时候返回的各种状态总数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5112"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5113",
    "title": "CRH-SNP5113-断点追踪添加服务记录",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：宋文勇</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial_no",
            "description": "<p>消息id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "noticeType",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "out_serial_no",
            "description": "<p>外部系统消息编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "client_name",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "kh_user_id",
            "description": "<p>开户系统user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "break_point",
            "description": "<p>开户步骤</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>电话回访记录</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_datetime",
            "description": "<p>开户最后操作时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "notice_create_datetime",
            "description": "<p>消息创建时间</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5113",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5114",
    "title": "CRH-SNP5114-断点追踪已读列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice_id",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deal_status",
            "description": "<p>处理状态，1：已处理，0：未处理</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "kh_user_id",
            "description": "<p>开户use_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>开户断点步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_create_datetime",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_way",
            "description": "<p>服务方式，1：电话，2：现场，3：短信</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_remark",
            "description": "<p>服务备注说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5114"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5114",
    "title": "CRH-SNP5114-断点追踪已读列表",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：宋文勇</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end",
            "description": "<p>分页结束</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy",
            "description": "<p>排序字段：create_datetime</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>升序 or 降序： desc asc</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_datetime",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.serial_no",
            "description": "<p>消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.out_serial_no",
            "description": "<p>外部系统消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.client_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.break_point",
            "description": "<p>开户步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.content",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.update_datetime",
            "description": "<p>最后操作时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.notice_create_datetime",
            "description": "<p>消息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5114"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5115",
    "title": "CRH-SNP5115-服务记录",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：宋文勇</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end",
            "description": "<p>分页结束</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy",
            "description": "<p>排序字段：create_datetime</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>升序 or 降序： desc asc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "out_serial_no",
            "description": "<p>消息编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceType",
            "defaultValue": "1",
            "description": "<p>服务类型，1：mot消息，2：开户类消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subBusinType",
            "description": "<p>子类型，如：消息类型编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_datetime",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.serial_no",
            "description": "<p>消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.out_serial_no",
            "description": "<p>外部系统消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.client_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.break_point",
            "description": "<p>开户步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.content",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.update_datetime",
            "description": "<p>最后操作时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark.notice_create_datetime",
            "description": "<p>消息创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5115"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5116",
    "title": "CRH-SNP5116-查询用户预约类型列表及对应用户数量",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t\t<li>备注：预约关系数据字典编号为：11217</li> \t   </ol>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "preengageList",
            "description": "<p>预约类型列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageList.preengageType",
            "description": "<p>预约类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageList.preengageTypeName",
            "description": "<p>预约类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageList.clientCount",
            "description": "<p>预约类型客户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BrokerBusiMsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5116"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5117",
    "title": "CRH-SNP5117-查询预约用户列表",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t\t<li>备注：预约关系数据字典编号为：11217</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "preengageType",
            "description": "<p>预约类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "preengageClientList",
            "description": "<p>预约客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageClientList.preengageType",
            "description": "<p>预约类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageClientList.preengageTypeName",
            "description": "<p>预约类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageClientList.clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageClientList.clientName",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preengageClientList.createDatetime",
            "description": "<p>预约关系创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BrokerBusiMsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5117"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5118",
    "title": "CRH-SNP5118-添加预约关系",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t\t<li>备注：预约关系数据字典编号为：11217</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "preengageType",
            "description": "<p>预约类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idNo",
            "description": "<p>身份证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "preengageSourceInfo",
            "description": "<p>(* 1：互联网预约2：公海预约3：二次开发预约)</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BrokerBusiMsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5118",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5120",
    "title": "CRH-SNP5120-公海客户列表查询",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchConditionn",
            "description": "<p>搜索条件，为手机号或者客户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileVestCity",
            "description": "<p>搜索条件，手机归属地，精确查询</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownBranchFlag",
            "description": "<p>本营业部标志，空表示查询所有营业部，0表示查询非本营业部，1表示查询本营业部</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页起始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clienName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientUserId",
            "description": "<p>客户userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openStatusInfo",
            "description": "<p>客户开户进度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isClaimed",
            "description": "<p>是否被认领</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "canSendBack",
            "description": "<p>是否可退回</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5120"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5121",
    "title": "CRH-SNP5121-认领客户",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientUserId",
            "description": "<p>客户userId</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5121",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5122",
    "title": "CRH-SNP5122-退回认领客户到公海",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientUserId",
            "description": "<p>客户userId</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5122",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5123",
    "title": "CRH-SNP5123-认领客户列表查询",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>认领开户成功列表分页起始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "20",
            "description": "<p>认领开户成功列表分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openFailList",
            "description": "<p>认领开户失败客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openFailList.clientUserId",
            "description": "<p>客户userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openFailList.clienName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openFailList.clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "openFailList.leftDay",
            "description": "<p>距离释放剩余日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openFailList.openStatusInfo",
            "description": "<p>开户进度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openSuccessList",
            "description": "<p>认领开户失败客户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openSuccessList.clientUserId",
            "description": "<p>客户userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openSuccessList.clienName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openSuccessList.clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "openSuccessList.openStatusInfo",
            "description": "<p>开户进度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5123"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5124",
    "title": "CRH-SNP5124-消息阅读接口",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：吴迪</li> \t\t<li>说明：插入外部系统消息至消息推送表</li> \t\t<li>备注：noticeType消息类型数据字典编号为：11212</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id，注：消息id和消息类型只能选择其中一个传值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "showType",
            "description": "<p>显示方式，1表示客户信息显示方式，2表示图文消息显示</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.serial_no",
            "description": "<p>消息编号id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.out_serial_no",
            "description": "<p>外部消息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.login_flag",
            "description": "<p>是否需要登录，1表示是，0表示否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.app_logo",
            "description": "<p>消息logo样式class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>消息有效开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>消息有效结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_status",
            "description": "<p>消息状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_ways",
            "description": "<p>消息推送方式，wbsocket和system系统推送两种</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.source_info",
            "description": "<p>消息来源，snp表示营销平台，kh表示开户，mot表示crm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_account",
            "description": "<p>经纪人账号</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "resultList.read_datetime",
            "description": "<p>阅读时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "resultList.read_count",
            "description": "<p>消息阅读数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content",
            "description": "<p>消息内容，注意：不同消息内容返回字段不一样</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.noticeContent",
            "description": "<p>消息正文（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.thumbnailUrl",
            "description": "<p>缩略图地址（图文消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_id",
            "description": "<p>客户号（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.client_name",
            "description": "<p>客户名（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.comment",
            "description": "<p>备注（mot消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.mobile_tel",
            "description": "<p>手机号（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_date",
            "description": "<p>开户日期（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.short_code",
            "description": "<p>渠道短码（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.channel_name",
            "description": "<p>渠道名称（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_content.open_way",
            "description": "<p>接入方式（开户消息类字段）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5124"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5127",
    "title": "CRH-SNP5127-预约记录列表查询",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：李二双</li> \t\t<li>说明：</li> \t\t<li>备注：预约关系数据字典编号为：11217；</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_kind",
            "description": "<p>渠道网点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "preengage_type",
            "description": "<p>预约类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1\"",
              "\"-1\""
            ],
            "optional": false,
            "field": "result_no",
            "description": "<p>预约状态，1|成功，-1|失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy",
            "defaultValue": "pre_datetime",
            "description": "<p>)] 排序字段名，默认预约时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序，选择升序或者降序，asc：升序，desc：降序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1\"",
              "\"0\""
            ],
            "optional": true,
            "field": "refresh_flag",
            "defaultValue": "0",
            "description": "<p>刷新标志，1|刷新，0|不刷新</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "preDetailList",
            "description": "<p>预约详情列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.unique_id",
            "description": "<p>预约记录唯一id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.channel_kind",
            "description": "<p>渠道网点：6|展业宝;7|CRM；8|短信上行;9|网开</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.channel_kind_detail",
            "description": "<p>渠道网点字典描述：展业宝;CRM；短信上行；网开</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.preengage_type",
            "description": "<p>预约类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.preengage_type_detail",
            "description": "<p>预约类型字典描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "preDetailList.pre_datetime",
            "description": "<p>预约时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.result_no",
            "description": "<p>预约结果：1|成功;-1|失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.result_no_detail",
            "description": "<p>预约结果字典描述：成功;失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.result_note",
            "description": "<p>预约结果提示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.confirm_content",
            "description": "<p>回复内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.mobile_tel",
            "description": "<p>经纪人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.snp_account",
            "description": "<p>经纪人用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.id_no",
            "description": "<p>客户身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.client_id",
            "description": "<p>客户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preDetailList.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "channelKindDicList",
            "description": "<p>渠道网点数据字典列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelKindDicList.dict_entry",
            "description": "<p>数据字典编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelKindDicList.entry_name",
            "description": "<p>数据字典名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelKindDicList.subentry",
            "description": "<p>字典子项编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelKindDicList.dict_prompt",
            "description": "<p>字典子项名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelKindDicList.status",
            "description": "<p>数据字典状态</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "preengageTypeDicList",
            "description": "<p>预约类型数据字典列表（具体字段同渠道网点数据字典列表）</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultNoDicList",
            "description": "<p>预约状态数据字典列表（具体字段同渠道网点数据字典列表）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BrokerBusiMsgAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5127"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5128",
    "title": "CRH-SNP5128-取消断点跟踪",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial_no",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5128",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5128",
    "title": "CRH-SNP5128-取消断点跟踪",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial_no",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5128",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5130",
    "title": "CRH-SNP5130-根据条件查询未读消息数量",
    "group": "app",
    "version": "1.0.0",
    "description": "<ol> \t\t<li>作者：wenda</li> \t\t<li>说明：根据消息类型查询未读消息数</li> \t   </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "noticeTypeNo",
            "description": "<p>消息类型编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "unReadNum",
            "description": "<p>未读消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5130"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5132",
    "title": "CRH-SNP5132-获取app菜单版本",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_menu_version",
            "description": "<p>app菜单版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MenuAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5132"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5133",
    "title": "CRH-SNP5133-长链接转短链接",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longUrl",
            "description": "<p>长链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": false,
            "field": "hasDomain",
            "description": "<p>是否有域名,0：无域名只是返回一个6位字符串，1：返回包含域名的完整短链接</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shortUrl",
            "description": "<p>短链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ToolAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5133"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5135",
    "title": "CRH-SNP5135-查询渠道佣金模板",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "model_list",
            "description": "<p>可选模板列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_list.model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_list.model_name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ChannelAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5135"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5136",
    "title": "CRH-SNP5136-更新渠道佣金模板",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_no",
            "description": "<p>模板编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ChannelAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5136",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5204",
    "title": "CRH-SNP5204-添加服务记录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice_id",
            "description": "<p>服务对象id，如：消息id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceType",
            "defaultValue": "1",
            "description": "<p>服务类型，1：mot消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subBusinType",
            "description": "<p>子类型，如：消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceWay",
            "description": "<p>服务方式， 1：打电话，2：拜访，3：发短信</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>服务说明（最大长度为2000字节）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "syncCrmFlag",
            "description": "<p>同步到crm标志，0：不同步，1同步（默认）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5204",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5209",
    "title": "CRH-SNP5209-获取消息列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_site",
            "description": "<p>菜单唯一编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": false,
            "field": "deal_status",
            "description": "<p>处理状态，0：未处理，1：已处理</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>分页起始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_count",
            "description": "<p>消息总数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_id",
            "description": "<p>消息id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>置顶标志，0：不置顶，1：置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建时间，格式yyyy-mm-dd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5209"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5210",
    "title": "CRH-SNP5210-根据消息类型获取消息列表(MOT列表)",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_site",
            "description": "<p>菜单唯一标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deal_status",
            "description": "<p>处理状态，1：已处理，0：未处理</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total_count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "undeal_total_count",
            "description": "<p>未处理数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dealed_total_count",
            "description": "<p>已处理数</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_id",
            "description": "<p>消息id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.deal_status",
            "description": "<p>处理状态，1：已处理，0：未处理</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_no",
            "description": "<p>消息类型编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建时间，格式yyyy-mm-dd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.client_id",
            "description": "<p>客户号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_way",
            "description": "<p>服务方式，1：打电话，2：现场，3：短信</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_remark",
            "description": "<p>服务记录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5210"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP5999",
    "title": "CRH-SNP5999 保存手机信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>签名： phone_uuid + yyyyMMdd + crh_snp, 生成MD5签名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_uuid",
            "description": "<p>个推sdkid 作为手机唯一标示 Notblank</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_model",
            "description": "<p>手机型号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform_name",
            "description": "<p>客户端平台 1代表安卓 2代表IOS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os_version",
            "description": "<p>手机系统版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_version",
            "description": "<p>APP版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_addr",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>插入时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_datetime",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_GetuiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp5999",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6000",
    "title": "CRH-SNP6000-绑定经纪人id和个推id",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "getui_id",
            "description": "<p>个推id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>客户端平台 1代表安卓 2代表IOS</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_GetuiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6000",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6001",
    "title": "CRH-SNP6001-产品列表查询,支持单个查询或分页查询所有",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>结束条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_content",
            "description": "<p>搜索字段，对应产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isImportant",
            "description": "<p>值为true表示查询重点考试产品</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isPass",
            "description": "<p>值为true表示查询已通过考试产品</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProductTrainAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6001",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6002",
    "title": "CRH-SNP6002-查询单个产品的具体信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_no",
            "description": "<p>产品编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProductTrainAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6002",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6003",
    "title": "CRH-SNP6003-查询单个产品需要的培训资料，以及是否已培训",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_no",
            "description": "<p>产品编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProductTrainAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6003",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6004",
    "title": "CRH-SNP6004-记录用户此次培训",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_no",
            "description": "<p>产品编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ProductTrainAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6004",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6005",
    "title": "CRH-SNP6005-通过文件路径将文档转成图片返回",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileUrl",
            "description": "<p>文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": true,
            "field": "condenseFlag",
            "defaultValue": "0",
            "description": "<p>压缩标志，0：不压缩，1：压缩</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "fileJpgList",
            "description": "<p>文件图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_CommonAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6005"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6006",
    "title": "CRH-SNP6006-业务使用说明数据 获取",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instruction_type",
            "description": "<p>业务说明类别 1：使用帮助</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>说明数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水号(唯一)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "business_name",
            "description": "<p>业务名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_type",
            "description": "<p>业务说明类别 1：使用帮助</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_description",
            "description": "<p>文字描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_picture",
            "description": "<p>图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>显示顺序</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_datetime_Str",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BusinessInstructionsAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6006"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6007",
    "title": "CRH-SNP6007-单条业务使用说明数据 获取",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水号(唯一)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>说明数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水号(唯一)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "business_name",
            "description": "<p>业务名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_type",
            "description": "<p>业务说明类别 1：使用帮助</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_description",
            "description": "<p>文字描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instruction_picture",
            "description": "<p>图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>显示顺序</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_datetime_Str",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_BusinessInstructionsAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6007"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6011",
    "title": "CRH-SNP6011-城市及其首写字母接口",
    "group": "app",
    "version": "1.0.0",
    "description": "<p>@apiParam {String} cityName 城市名称</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.cityName",
            "description": "<p>城市名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.letter",
            "description": "<p>城市首写字母（单个）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6011"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6012",
    "title": "CRH-SNP6012-公海打电话记录流水",
    "group": "app",
    "version": "1.0.0",
    "description": "<p>@apiParam {String} clientUserId 客户user_id</p>",
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_OpenseaAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6012",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6013",
    "title": "CRH-SNP6013-互联网客户池",
    "group": "app",
    "version": "2.0.0",
    "description": "<ol>                 <li>作者：闻达</li>                 <li>说明：</li>                 </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchConditionn",
            "description": "<p>搜索条件，如果是数字则模糊查询手机号，否则模糊查询客户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileVestCity",
            "description": "<p>搜索条件，手机归属地，精确查询(传空时查全部，值为default时查询当前经纪人营业部归属地城市)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isClaimed",
            "description": "<p>是否被领取过(ture为被领取过，false为没被领取过，空为全部)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isClaimedByMe",
            "description": "<p>是否被当前经纪人领取过（true为被我领取过，false为没被我领取过，空为全部）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页起始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.clientName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobileVestCity",
            "description": "<p>客户手机归属地</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mergeName",
            "description": "<p>客户混合名（例如@微信/手机号）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.sourceInfoStr",
            "description": "<p>来源：微信/汇金谷/汇金谷活动</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.activityDesc",
            "description": "<p>客户最新活动名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.nickName",
            "description": "<p>微信昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.claimCount",
            "description": "<p>领取次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.telCount",
            "description": "<p>打电话次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.source_info",
            "description": "<p>来源：微信/汇金谷/汇金谷活动</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobileVestCity",
            "description": "<p>查询归属地</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_InternetCustomerAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6013"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6014",
    "title": "CRH-SNP6014-互联网客户已认领列表",
    "group": "app",
    "version": "2.0.0",
    "description": "<ol>                 <li>作者：闻达</li>                 <li>说明：</li>                 </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "followUp",
            "description": "<p>待跟进（true为待跟进，false为非待跟进，空为全部）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页起始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.clientName",
            "description": "<p>客户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobileVestCity",
            "description": "<p>客户手机归属地</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mergeName",
            "description": "<p>客户混合名（例如@微信/手机号）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.sourceInfoStr",
            "description": "<p>来源：微信/汇金谷/汇金谷活动</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.activityName",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.openProcess",
            "description": "<p>开户进度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.khUserId",
            "description": "<p>注册用户的开户user_id，调用CRH-SNP3202接口查询开户进度时使用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.tagRelease",
            "description": "<p>2天后释放的标签显示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.tagContact",
            "description": "<p>3天内联系的标签显示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.claimedDate",
            "description": "<p>认领日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.contactDate",
            "description": "<p>最近联系日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.update_datetime",
            "description": "<p>更新日期（如果来源微信指关注日期，来源汇金谷更新日期，活动则最好活动日期）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.existPreenageerelation",
            "description": "<p>是否预约过true,false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.claimRange",
            "description": "<p>认领范围或状态（2,3表示被其他营业部认领，界面显示被其他营业部认领时可根据此值判断）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_InternetCustomerAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6014"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6015",
    "title": "CRH-SNP6015-互联网客户认领释放操作",
    "group": "app",
    "version": "2.0.0",
    "description": "<ol>                 <li>作者：闻达</li>                 <li>说明：</li>                 </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientMobile",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>0为认领操作，1为释放操作，2为打电话操作</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_InternetCustomerAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6015"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6016",
    "title": "CRH-SNP6016-互联网客户统计",
    "group": "app",
    "version": "2.0.0",
    "description": "<ol>                 <li>作者：闻达</li>                 <li>说明：</li>                 </ol>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalClaimCount",
            "description": "<p>总领取数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "canClaimCount",
            "description": "<p>可领取数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalTurnCount",
            "description": "<p>总转化数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registerTurnCount",
            "description": "<p>注册转化数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalCanclaimCount",
            "description": "<p>领取额度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "releaseDay",
            "description": "<p>自动释放日数</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_InternetCustomerAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6016"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6017",
    "title": "CRH-SNP6017-查询活动列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>活动状态，多种状态逗号隔开</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderby",
            "description": "<p>排序，1：最热排序，默认按照更新时间排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "activityList",
            "description": "<p>活动列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activity_id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activity_name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.summary",
            "description": "<p>活动摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.thumbnail_url",
            "description": "<p>活动题图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.article_content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.status",
            "description": "<p>活动状态，数据字典11202</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.begin_date",
            "description": "<p>活动开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.end_date",
            "description": "<p>活动结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.order_no",
            "description": "<p>排序序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.priority_level",
            "description": "<p>置顶优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activityApplyCount",
            "description": "<p>活动参与数量（成功申请渠道数量）</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalCount",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6017"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6018",
    "title": "CRH-SNP6018-查询活动详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity_id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity_id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity_name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>活动摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail_url",
            "description": "<p>活动题图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>活动状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "begin_date",
            "description": "<p>活动开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>活动结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>排序序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "priority_level",
            "description": "<p>置顶优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityApplyCount",
            "description": "<p>活动参与数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "snpAttributeModel",
            "description": "<p>开户分成模板</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snpAttributeModel.snp_attribute_no",
            "description": "<p>开户分成模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snpAttributeModel.snp_attribute_name",
            "description": "<p>开户分成模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "snpFareModelList",
            "description": "<p>套餐模板</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snpFareModel.snp_fare_model",
            "description": "<p>佣金模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snpFareModel.snp_model_name",
            "description": "<p>佣金模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "enBankList",
            "description": "<p>可选存管银行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enBankList.bank_no",
            "description": "<p>存管银行编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enBankList.bank_name",
            "description": "<p>存管银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "enBranchList",
            "description": "<p>可选营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enBranchList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enBranchList.branch_name",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materialList",
            "description": "<p>活动素材列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materialList.material_no",
            "description": "<p>素材编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materialList.material_name",
            "description": "<p>素材名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materialList.material_desc",
            "description": "<p>素材描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materialList.url",
            "description": "<p>素材链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6018"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6019",
    "title": "CRH-SNP6019-添加活动申请记录",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apply_userid",
            "description": "<p>申请用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "own_object_type",
            "description": "<p>对象类型，0：活动</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "own_object_id",
            "description": "<p>对象id（活动id）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apply_content",
            "description": "<p>申请内容，如活动二维码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apply_no",
            "description": "<p>申请流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6019"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6020",
    "title": "CRH-SNP6020-查询文章列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_no",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_type",
            "description": "<p>文章类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "articleList",
            "description": "<p>文章列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_no",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_type",
            "description": "<p>文章类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.summary",
            "description": "<p>文章摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.thumbnail_url",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.order_no",
            "description": "<p>序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.priority_level",
            "description": "<p>优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalCount",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ContentAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6020"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6021",
    "title": "CRH-SNP6021-查询文章详情",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "article_no",
            "description": "<p>文章编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_no",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_type",
            "description": "<p>文章类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>文章摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail_url",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "priority_level",
            "description": "<p>优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ContentAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6021"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6022",
    "title": "CRH-SNP6022-资源列表查询",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_no",
            "description": "<p>资源id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_type",
            "description": "<p>资源类型，0：公共资源，1：活动资源，2：推广资源</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_content_type",
            "description": "<p>资源类型，0：公共资源，1：活动资源，2：推广资源</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>分页开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>分页结束</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resourceList",
            "description": "<p>资源列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.material_no",
            "description": "<p>资源id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.material_name",
            "description": "<p>资源名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.material_desc",
            "description": "<p>资源描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.material_type",
            "description": "<p>资源类型，0：公共资源，1：活动资源，2：推广资源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.material_content_type",
            "description": "<p>资源内容类型（数据字典11239），1：app，2：sdk，3：图片，4：文档，5：链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.url",
            "description": "<p>资源链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.file_size",
            "description": "<p>资源大小，单位kb</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.create_by",
            "description": "<p>创建人user_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.create_datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.update_by",
            "description": "<p>修改人user_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.update_datetime",
            "description": "<p>修改时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.app_version",
            "description": "<p>app版本</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resourceList.apps_scope",
            "description": "<p>兼容性说明</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalCount",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ResourceAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6022"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6023",
    "title": "CRH-SNP6023-通过文件链接下载文件",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileUrl",
            "description": "<p>文件链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>文件名（可不传，不传会从链接中直接截取）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/App_CommonAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6023"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6027",
    "title": "CRH-SNP6027-查询用户参与活动列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>活动状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>活动信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activityChannel",
            "description": "<p>活动渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityOpenCount",
            "description": "<p>活动渠道开户数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6027"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6028",
    "title": "CRH-SNP6028-查询用户活动渠道",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "own_object_type",
            "description": "<p>所属对象类型，如：0：活动</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "own_object_id",
            "description": "<p>所属对象id，如活动id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": "<p>键为own_object_id，值为short_code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6028"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6029",
    "title": "CRH-SNP6029-查询热门活动列表",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "activityList",
            "description": "<p>活动列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activity_id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activity_name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.summary",
            "description": "<p>活动摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.thumbnail_url",
            "description": "<p>活动题图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.article_content",
            "description": "<p>活动内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.status",
            "description": "<p>活动状态，数据字典11202</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.begin_date",
            "description": "<p>活动开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.end_date",
            "description": "<p>活动结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.order_no",
            "description": "<p>排序序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.priority_level",
            "description": "<p>置顶优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityList.activityApplyCount",
            "description": "<p>活动参与数量（成功申请渠道数量）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ActivityAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6029"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6030",
    "title": "CRH-SNP6030-查询热门文章（推广）列表",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "articleList",
            "description": "<p>文章列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_no",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_type",
            "description": "<p>文章类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.summary",
            "description": "<p>文章摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.thumbnail_url",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.article_content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.order_no",
            "description": "<p>序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.priority_level",
            "description": "<p>优先级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.update_by",
            "description": "<p>最后操作人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "articleList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ContentAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6030"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6031",
    "title": "CRH-SNP6031-pc端经纪人注册申请流程1008",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称（企业名称）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6031",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6032",
    "title": "CRH-SNP6032-pc端经纪人子账户注册申请流程1009",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称（企业名称）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp6032",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7001",
    "title": "CRH-SNP7001-投顾产品列表查询,支持单个查询或分页查询所有",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "20",
            "description": "<p>结束条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_content",
            "description": "<p>搜索字段，对应产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "showRelation",
            "description": "<p>是否显示关注情况</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>员工微店id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>产品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type_name",
            "description": "<p>产品类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.picture_name",
            "description": "<p>图片名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.digest_info",
            "description": "<p>摘要信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level",
            "description": "<p>风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level_name",
            "description": "<p>风险等级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_freq",
            "description": "<p>服务频率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_public",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.business_data",
            "description": "<p>业务数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_id",
            "description": "<p>投顾用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_name",
            "description": "<p>投顾用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobile_tel",
            "description": "<p>投顾手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_branch_no",
            "description": "<p>投顾营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_description",
            "description": "<p>投顾描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.price",
            "description": "<p>产品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.usedot",
            "description": "<p>是否使用点卡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_add_attention",
            "description": "<p>是否添加关注，1：已关注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime",
            "description": "<p>预约开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime_str",
            "description": "<p>预约开始时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime",
            "description": "<p>预约结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime_str",
            "description": "<p>预约结束时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7001"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7002 CRH-SNP7002-分享页面",
    "title": "店主推荐的投顾产品",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>员工微店id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "resultListRelay",
            "description": "<p>该分享的产品</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "resultListConcerns",
            "description": "<p>员工关注的产品</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7002CrhSnp7002"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7003",
    "title": "CRH-SNP7003-查看微店店主推荐的产品",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>员工微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "20",
            "description": "<p>结束条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>产品类型</p> <ol> \t\t<li>0：点睛直击</li> \t\t<li>1：来自组合</li> \t\t<li>2：来自股票池</li> \t\t<li>3：策略资讯分类</li> \t\t<li>4：藏金阁</li> \t\t<li>5：其他</li> \t   </ol>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>产品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type_name",
            "description": "<p>产品类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.picture_name",
            "description": "<p>图片名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.digest_info",
            "description": "<p>摘要信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level",
            "description": "<p>风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level_name",
            "description": "<p>风险等级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_freq",
            "description": "<p>服务频率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_public",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.business_data",
            "description": "<p>业务数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_id",
            "description": "<p>投顾用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_name",
            "description": "<p>投顾用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobile_tel",
            "description": "<p>投顾手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_branch_no",
            "description": "<p>投顾营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_description",
            "description": "<p>投顾描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.price",
            "description": "<p>产品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.usedot",
            "description": "<p>是否使用点卡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_add_attention",
            "description": "<p>是否添加关注，1：已关注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime",
            "description": "<p>预约开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime_str",
            "description": "<p>预约开始时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime",
            "description": "<p>预约结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime_str",
            "description": "<p>预约结束时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7003"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7004",
    "title": "CRH-SNP7004-对投顾产品添加关注",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7004",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7005",
    "title": "CRH-SNP7005-对投顾产品取消关注",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7005",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7006",
    "title": "CRH-SNP7006-投顾产品销售明细",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>开始记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>截止记录数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.begin_datetime_str",
            "description": "<p>开始时间格式化</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no_str",
            "description": "<p>营业部名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.business_data",
            "description": "<p>业务数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.buy_balance",
            "description": "<p>购买金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.capital_account",
            "description": "<p>资金账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.client_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.digest_info",
            "description": "<p>摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.end_datetime_str",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_public",
            "description": "<p>是否上架（0，上架1，下架）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>是否置顶（0未置顶，1置顶）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.other_fare",
            "description": "<p>其他费用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.picture_name",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level",
            "description": "<p>风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level_name",
            "description": "<p>风险等级描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_code",
            "description": "<p>产品编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type_name",
            "description": "<p>产品类型描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_begin_datetime_str",
            "description": "<p>服务开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_end_datetime_str",
            "description": "<p>服务截止时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_freq",
            "description": "<p>服务方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_freq_str",
            "description": "<p>服务方式描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_type_str",
            "description": "<p>服务类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_account",
            "description": "<p>营销人员账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_branch_no",
            "description": "<p>员工营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_description",
            "description": "<p>员工描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_mobile_tel",
            "description": "<p>员工手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_no",
            "description": "<p>员工编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.submit_datetime_str",
            "description": "<p>提交时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.usedot",
            "description": "<p>是否使用点卡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_id",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime_str",
            "description": "<p>预约开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime_str",
            "description": "<p>预约截止时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7006"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7007",
    "title": "CRH-SNP7007-投顾产品金额销售统计",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_type",
            "description": "<p>时间类型(day,month,week)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>销售列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.sales_count",
            "description": "<p>销售数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.sales_time",
            "description": "<p>销售时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.sales_val",
            "description": "<p>销售额</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "salesDataListThisMon",
            "description": "<p>本月销售列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisMon.sales_count",
            "description": "<p>销售数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisMon.sales_time",
            "description": "<p>销售时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisMon.sales_val",
            "description": "<p>销售额</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "salesDataListThisWeek",
            "description": "<p>本周销售列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisWeek.sales_count",
            "description": "<p>销售数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisWeek.sales_time",
            "description": "<p>销售时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisWeek.sales_val",
            "description": "<p>销售额</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "salesDataListThisYear",
            "description": "<p>本年销售列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisYear.sales_count",
            "description": "<p>销售数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisYear.sales_time",
            "description": "<p>销售时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salesDataListThisYear.sales_val",
            "description": "<p>销售额</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7007"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7009",
    "title": "CRH-SNP7009-登录资金账号获取微店信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>资金账号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>账号信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>错误号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_LoginRegisterAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7009"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7010",
    "title": "CRH-SNP7010-获取微店添加的资讯信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_num",
            "defaultValue": "0",
            "description": "<p>页面码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_size",
            "defaultValue": "10",
            "description": "<p>页面数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>资讯类别 （数据字典11235）资讯类别，1：今日观点，2：图说财经，3：投顾观点，4：大讲堂，5：今日观点(关联资讯信息)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.serial_no",
            "description": "<p>流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.infodetail_no",
            "description": "<p>资讯信息编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.category_id",
            "description": "<p>资讯类别 （数据字典11235）资讯类别，1：今日观点，2：图说财经，3：投顾观点，4：大讲堂，5：今日观点(关联资讯信息)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.snp_account",
            "description": "<p>用户user_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.status",
            "description": "<p>状态，8：有效</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.update_datetime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.update_datetime_str",
            "description": "<p>更新时间str，格式yyyyMMdd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.serial_no",
            "description": "<p>流水序号(资讯编号)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_content_type",
            "description": "<p>文章内容形式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_description",
            "description": "<p>资讯概述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.article_url",
            "description": "<p>资讯访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.order_num",
            "description": "<p>菜单排序信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.image_url",
            "description": "<p>图片url地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.thumbnail",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.publish_date",
            "description": "<p>发布日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.view_count",
            "description": "<p>浏览数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.share_count",
            "description": "<p>分享数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.effective_end_str",
            "description": "<p>失效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.effective_start_str",
            "description": "<p>生效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.update_by",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.Infodetail.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7010"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7011",
    "title": "CRH-SNP7011-微店添加资讯信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>资讯信息的no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>（数据字典11235）资讯类别，1：今日观点，2：图说财经，3：投顾观点，4：大讲堂，5：今日观点(关联资讯信息)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_add_all",
            "description": "<p>是否全部添加（默认为0）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7011",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7012",
    "title": "CRH-SNP7012-微店移除资讯信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>资讯信息的no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>资讯类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_remove_all",
            "description": "<p>是否全部移除（默认为0）</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7012",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7013",
    "title": "CRH-SNP7013-资讯列表获取(区分已添加和未添加) ,根据资讯类别获取不同类型的资讯信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>资讯类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_content",
            "description": "<p>搜索条件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_num",
            "defaultValue": "0",
            "description": "<p>页面码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page_size",
            "defaultValue": "10",
            "description": "<p>页面数量</p>"
          }
        ]
      }
    },
    "description": "<ol> \t\t<li>资讯类别</li> \t\t<li>说明：类别的数据字典编号为 ：11235 1.今日观点 2.图说财经 3.投顾观点  4.大讲堂 5.今日观点下关联资讯信息 </li> \t\t<li>备注：为兼容该接口原本逻辑,该类型在默认情况下值为2</li> \t   </ol>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>资讯列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.serial_no",
            "description": "<p>流水序号(资讯编号)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_content_type",
            "description": "<p>文章内容形式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_description",
            "description": "<p>资讯概述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.article_url",
            "description": "<p>资讯访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.order_num",
            "description": "<p>菜单排序信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.image_url",
            "description": "<p>图片url地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.thumbnail",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.publish_date",
            "description": "<p>发布日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.view_count",
            "description": "<p>浏览数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.share_count",
            "description": "<p>分享数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.effective_end_str",
            "description": "<p>失效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.effective_start_str",
            "description": "<p>生效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.update_by",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_add",
            "description": "<p>是否已添加</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.remark",
            "description": "<p>备注信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "noticeList",
            "description": "<p>消息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.notice_id",
            "description": "<p>消息id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.notice_type_no",
            "description": "<p>消息类型编号，0：系统消息，1：多人消息，2：单人消息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.notice_caption",
            "description": "<p>通知标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.notice_content",
            "description": "<p>消息内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.subsys_no",
            "description": "<p>系统编号，5：营销平台</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.status",
            "description": "<p>消息状态，0：显示中，1：已结束，2：已删除，3：未开始，8：发送成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.effective_start",
            "description": "<p>有效期开始日期，格式yyyyMMdd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.effective_end",
            "description": "<p>有效期结束日期，格式yyyyMMdd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.create_datetime",
            "description": "<p>创建时间，格式：yyyyMMdd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.create_by",
            "description": "<p>创建人用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.read_flag",
            "description": "<p>阅读标志，0：未阅读，1：已阅读</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.read_datetime",
            "description": "<p>阅读时间，格式：yyyyMMdd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.receiver_id",
            "description": "<p>接收用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "noticeList.delete_flag",
            "description": "<p>0：未删除，1：已删除</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7013"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7014",
    "title": "CRH-SNP7014-资讯详情获取 ,根据资讯编号",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>资讯类别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>流水序号(资讯编号)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_content_type",
            "description": "<p>文章内容形式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_description",
            "description": "<p>资讯概述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "article_url",
            "description": "<p>资讯访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_num",
            "description": "<p>菜单排序信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片url地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publish_date",
            "description": "<p>发布日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "view_count",
            "description": "<p>浏览数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "share_count",
            "description": "<p>分享数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_end_str",
            "description": "<p>失效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "effective_start_str",
            "description": "<p>生效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_by",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_add",
            "description": "<p>是否添加</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail",
            "description": "<p>子类资讯</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stockInfo",
            "description": "<p>股票池信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stockInfo.stock_code",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stockInfo.stock_name",
            "description": "<p>股票名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7014"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7016",
    "title": "投顾产品类型查询",
    "group": "app",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resultList",
            "description": "<p>投顾产品类型列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type_name",
            "description": "<p>产品类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7016"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7017",
    "title": "CRH-SNP7017-分页获取热点子资询信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial_no",
            "description": "<p>资讯id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_num",
            "defaultValue": "0",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "defaultValue": "10",
            "description": "<p>分页长度</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "child_infodetail_list",
            "description": "<p>子资讯列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.serial_no",
            "description": "<p>流水序号(资讯编号)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_content_type",
            "description": "<p>文章内容形式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_description",
            "description": "<p>资讯概述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.article_url",
            "description": "<p>资讯访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.order_num",
            "description": "<p>菜单排序信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.image_url",
            "description": "<p>图片url地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.thumbnail",
            "description": "<p>缩略图地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.publish_date",
            "description": "<p>发布日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.view_count",
            "description": "<p>浏览数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.share_count",
            "description": "<p>分享数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.effective_end_str",
            "description": "<p>失效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.effective_start_str",
            "description": "<p>生效时间str</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.create_by",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.update_by",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.is_add",
            "description": "<p>是否添加</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.child_infodetail",
            "description": "<p>子类资讯</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.stockInfo",
            "description": "<p>股票池信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.stockInfo.stock_code",
            "description": "<p>股票代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_infodetail_list.stockInfo.stock_name",
            "description": "<p>股票名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InfoQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7017"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7018",
    "title": "CRH-SNP7018-热销投顾产品列表查询,支持单个查询或分页查询所有",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>开始条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "end",
            "defaultValue": "20",
            "description": "<p>结束条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_content",
            "description": "<p>搜索字段，对应产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "showRelation",
            "description": "<p>是否显示关注情况</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>员工微店id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "resultList",
            "description": "<p>产品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type",
            "description": "<p>产品类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_type_name",
            "description": "<p>产品类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.picture_name",
            "description": "<p>图片名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.begin_datetime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.end_datetime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.digest_info",
            "description": "<p>摘要信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level",
            "description": "<p>风险等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.prodrisk_level_name",
            "description": "<p>风险等级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.service_freq",
            "description": "<p>服务频率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_public",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.business_data",
            "description": "<p>业务数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_id",
            "description": "<p>投顾用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.user_name",
            "description": "<p>投顾用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.mobile_tel",
            "description": "<p>投顾手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_branch_no",
            "description": "<p>投顾营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.staff_description",
            "description": "<p>投顾描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.price",
            "description": "<p>产品价格</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.usedot",
            "description": "<p>是否使用点卡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.is_add_attention",
            "description": "<p>是否添加关注，1：已关注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime",
            "description": "<p>预约开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yybegin_datetime_str",
            "description": "<p>预约开始时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime",
            "description": "<p>预约结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultList.yyend_datetime_str",
            "description": "<p>预约结束时间，格式yyyy/MM/dd</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_InvestProductAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7018"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP7020",
    "title": "CRH-SNP7020-根据业务查询上传图片信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>业务id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_6A",
            "description": "<p>证件照片6A</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_6B",
            "description": "<p>证件照片6B</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_80",
            "description": "<p>证件照片80</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_CL",
            "description": "<p>证件照片CL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_6A_base64",
            "description": "<p>证件照片6A</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_6B_base64",
            "description": "<p>证件照片6B</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_80_base64",
            "description": "<p>证件照片80</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "archivebag_id_CL_base64",
            "description": "<p>证件照片CL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userIdVerify_status",
            "description": "<p>公安认证状态  8：通过 ，其他都为未通过</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_MyInfoAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrhSnp7020"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH_SNP5119",
    "title": "CRH_SNP5119-中登查询客户股东账户信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户id</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/ZdAccountQueryAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpCrh_snp5119",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0002",
    "title": "CRH-SNP-SHOP0002-根据微店ID更新微店的信息",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>用户user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shop_name",
            "description": "<p>微店名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "backimage_material_no",
            "description": "<p>客户背景图片，对应shopmaterial素材表的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_by",
            "description": "<p>创建人id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "create_datetime",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_by",
            "description": "<p>更新人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "update_datetime",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态，1：开启，0：关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account_name",
            "description": "<p>员工姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "broker_code",
            "description": "<p>员工编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession_cert",
            "description": "<p>执业编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热点，0：不是，1：是</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopSetApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0002",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0003",
    "title": "CRH-SNP-SHOP0003-根据素材类型获取素材信息（个人背景列表获取，个人模板列表获取）",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "material_type",
            "description": "<p>素材类型： 1.图片2.文本3.广告4,导航 5.列表菜单 6.个人背景图7.模板预览图</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>用户user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "shopMaterialList",
            "description": "<p>素材列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_no",
            "description": "<p>素材编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_name",
            "description": "<p>素材名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_desc",
            "description": "<p>素材名称摘要描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_type",
            "description": "<p>素材类型： 1.图片2.文本3.广告4,导航 5.列表菜单 6.个人背景图7.模板预览图</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_content",
            "description": "<p>素材内容:图片类型时为url，协议类型时为协议内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.material_content_type",
            "description": "<p>素材内容类型，image：图片，text：文本，link：链接，location：位置</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.redirect_uri",
            "description": "<p>跳转地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.status",
            "description": "<p>状态，1：正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.create_by",
            "description": "<p>创建人id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.create_datetime",
            "description": "<p>创建时间，格式yyyyMMdd hh:mm:ss</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.update_by",
            "description": "<p>更新人id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.create_by_name",
            "description": "<p>创建人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopMaterialList.update_by_name",
            "description": "<p>更新人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>微信申请appid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jsapi_ticket",
            "description": "<p>微信js秘钥串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nonceStr",
            "description": "<p>随机串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>时间秒数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>签名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopMaterialApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0003"
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0004",
    "title": "CRH-SNP-SHOP0004-根据模板编号查询模板元素组成",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>用户user_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "shopModelSet",
            "description": "<p>模板属性集合</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.model_name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.model_image_url",
            "description": "<p>模板图片预览，对应素材表的material_no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.status",
            "description": "<p>状态，1：有效，0：无效</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.is_default",
            "description": "<p>是否默认，1：是，0：否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSet.model_type",
            "description": "<p>1：微店模板 2：广场模板</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopModelSetApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0004"
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0006",
    "title": "CRH-SNP-SHOP0006-微店访问次数统计（按日，按周，按月）",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query_size",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query_type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "shopVisitMap",
            "description": "<p>访问结果集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.visit_today_num",
            "description": "<p>今日访问量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.visit_sum_num",
            "description": "<p>访问总量</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList",
            "description": "<p>访问量列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList.visit_num",
            "description": "<p>访问量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList.last_visit_num",
            "description": "<p>最新访问量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList.differ",
            "description": "<p>访问量变化量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList.visit_date",
            "description": "<p>访问日期，格式yyyyMM</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopVisitMap.shopVisitCountList.last_visit_date",
            "description": "<p>最新访问日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopVisitApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0006"
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0011",
    "title": "CRH-SNP-SHOP0011-查询模板列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "model_no",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "model_name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>状态，1：有效，0：无效</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "is_default",
            "description": "<p>是否默认，1：是，0：否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "model_type",
            "description": "<p>1：微店模板 2：广场模板</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "shopModelSetList",
            "description": "<p>模板列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSetList.model_image_url_str",
            "description": "<p>模板图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSetList.status_desc",
            "description": "<p>状态描述，文案为正常或不正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shopModelSetList.is_default_desc",
            "description": "<p>是否默认描述，文案为是或者否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopModelSetApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0011"
  },
  {
    "type": "post / get",
    "url": "/snp/shop/CRH-SNP-SHOP0012",
    "title": "CRH-SNP-SHOP0012-查询精选微店列表",
    "group": "app",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "defaultValue": "5",
            "description": "<p>长度</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "hotShopList",
            "description": "<p>微店列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.snp_account",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.shop_id",
            "description": "<p>微店id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.shop_name",
            "description": "<p>微店名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.user_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.broker_image",
            "description": "<p>经纪人头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.image_file",
            "description": "<p>头像base64串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.broker_type",
            "description": "<p>经纪人类型，9：经纪人，1：理财经理，否则都是客户经理</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.broker_type_desc",
            "description": "<p>经纪人类型描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotShopList.visitNum",
            "description": "<p>访问量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/microstore/action/api/ShopSetApiAction.java",
    "groupTitle": "app",
    "name": "Post___getSnpShopCrhSnpShop0012"
  },
  {
    "type": "post",
    "url": "snp/CRH-SNP5129",
    "title": "CRH-SNP5129-查询未安装汇金谷客户相关统计",
    "version": "1.0.0",
    "group": "business_handle",
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "business_handle",
    "name": "PostSnpCrhSnp5129"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP0002",
    "title": "CRH-SNP0002-渠道开户属性获取",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent_short_code",
            "description": "<p>父渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_url",
            "description": "<p>app_url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broker_branch_no",
            "description": "<p>经纪人所属分支机构编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_busin_no",
            "description": "<p>业务类别编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app",
            "description": "<p>app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList",
            "description": "<p>银行列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.bank_no",
            "description": "<p>银行代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.bank_type",
            "description": "<p>银行类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.bank_trust_flag",
            "description": "<p>存管标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.en_sign_flag",
            "description": "<p>允许签约标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bankList.icon",
            "description": "<p>银行图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList",
            "description": "<p>机构列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_no",
            "description": "<p>分支机构no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_name",
            "description": "<p>分支结构名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList",
            "description": "<p>佣金模版列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList.model_name",
            "description": "<p>模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList.fare_model",
            "description": "<p>费用模版</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList.fare_rate",
            "description": "<p>费用比率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList.branch_no",
            "description": "<p>分支机构no</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fareList.branch_name",
            "description": "<p>分支结构名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/AccountAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrhSnp0002"
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP0003",
    "title": "CRH-SNP0003-绑定渠道开户用户",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/AccountAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrhSnp0003",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/snp/CRH-SNP1024",
    "title": "CRH-SNP1024-开户统计",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "OpenAccountCountForm",
            "optional": false,
            "field": "form",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.type",
            "description": "<p>日期类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.start_date",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.end_date",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.own_object_type",
            "description": "<p>所属对象类型，默认空，0：活动</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "form.own_object_id",
            "description": "<p>对象类型为活动时表示活动id所属对象id，对象类型为活动时表示活动id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.dateType",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.start_date",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.end_date",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.xAxis",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.registerCountDay",
            "description": "<p>昨日注册人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.openCountDay",
            "description": "<p>昨日开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.validCountDay",
            "description": "<p>昨日有效户数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.registerCountMonth",
            "description": "<p>本月注册人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.openCountMonth",
            "description": "<p>本月开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.validCountMonth",
            "description": "<p>本月有效人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.registerCount",
            "description": "<p>累计注册人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.openCount",
            "description": "<p>累计开户人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.validCount",
            "description": "<p>累计有效人数 // highCharts中的数据-主账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisRegister",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisOpen",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisApply",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisFail",
            "description": "<p>// highCharts中的数据-子账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisRegisterChild",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisOpenChild",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisApplyChild",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.yAxisFailChild",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.validNum",
            "description": "<p>有效数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resMap.currDateTime",
            "description": "<p>当前系统时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/AccountCountAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrhSnp1024"
  },
  {
    "type": "post",
    "url": "snp/CRH-SNP2056",
    "title": "CRH-SNP2056-获取用户认证信息，身份证等",
    "version": "1.0.0",
    "group": "snp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_kind",
            "description": "<p>身份类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userinfo",
            "description": ""
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrhSnp2056"
  },
  {
    "type": "post",
    "url": "snp/CRH-SNP6010",
    "title": "CRH-SNP6010-根据clientId查询客户画像地址",
    "version": "1.0.0",
    "group": "snp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>客户号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isShow",
            "description": "<p>是否显示</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientImageUrl",
            "description": "<p>客户画像加密后的地址，时效5分钟</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_ClientAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrhSnp6010"
  },
  {
    "type": "post",
    "url": "snp/CRH_SNP5131",
    "title": "CRH_SNP5131-查询消息管理列表相关内容",
    "version": "1.0.0",
    "group": "snp",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.serial_no",
            "description": "<p>消息id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.notice_title",
            "description": "<p>消息标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.notice_type_no",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.notice_type_name",
            "description": "<p>消息类型名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.notice_summary",
            "description": "<p>消息摘要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.unReadNum",
            "description": "<p>未读消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.resultList.create_datetime_str",
            "description": "<p>消息创建日期01月01日格式</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrh_snp5131"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "snp/CRH_SNP6008",
    "title": "CRH_SNP6008-增加产品MOT任务及微信分享功能接口",
    "version": "1.0.0",
    "group": "snp",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.userName",
            "description": "<p>消息对应经纪人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.tel",
            "description": "<p>消息对应经纪人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.clientName",
            "description": "<p>消息对应的客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.productName",
            "description": "<p>消息remark字段中的产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.occurDate",
            "description": "<p>消息remark字段中的发生日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.expireDate",
            "description": "<p>消息remark字段中的到期时间对应的日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.openDate",
            "description": "<p>消息remark字段中的产品开放日对应的日期</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrh_snp6008"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeId",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "snp/CRH_SNP6008",
    "title": "CRH_SNP6008-增加产品MOT任务及微信分享功能接口",
    "version": "1.0.0",
    "group": "snp",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.userName",
            "description": "<p>消息对应经纪人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.tel",
            "description": "<p>消息对应经纪人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.clientName",
            "description": "<p>消息对应的客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.productName",
            "description": "<p>消息remark字段中的产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.occurDate",
            "description": "<p>消息remark字段中的发生日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.expireDate",
            "description": "<p>消息remark字段中的到期时间对应的日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.openDate",
            "description": "<p>消息remark字段中的产品开放日对应的日期</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrh_snp6008"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": "<p>客户姓名</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "snp/CRH_SNP6009",
    "title": "CRH_SNP6009-增加产品MOT任务搜索功能接口",
    "version": "1.0.0",
    "group": "snp",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.occurDate",
            "description": "<p>消息remark字段中的发生日期</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeSendAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrh_snp6009"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noticeType",
            "description": "<p>消息类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": "<p>客户姓名</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "snp/CRH_SNP6009",
    "title": "CRH_SNP6009-增加产品MOT任务搜索功能接口",
    "version": "1.0.0",
    "group": "snp",
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_NoticeAction.java",
    "groupTitle": "snp",
    "name": "PostSnpCrh_snp6009"
  },
  {
    "type": "post / get",
    "url": "/snp/backend/faremodelDelete",
    "title": "费用模板数据删除",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FareModel",
            "optional": false,
            "field": "fareModel",
            "description": "<p>FareModel对象</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FaremodelManagerAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpBackendFaremodeldelete",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/backend/faremodelEditSave",
    "title": "费用模板保存（新增、修改共用）",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FareModel",
            "optional": false,
            "field": "fareModel",
            "description": "<p>FareModel对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "op_type",
            "description": "<p>修改类型，0表新增，1表修改</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FaremodelManagerAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpBackendFaremodeleditsave"
  },
  {
    "type": "post / get",
    "url": "/snp/commissonTemplateFromCounter",
    "title": "获取柜台网点信息",
    "group": "snp",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List[Map]",
            "optional": false,
            "field": "list",
            "description": "<p>柜台fare_model、branch_no、model_name信息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.fare_model",
            "description": "<p>费用模板编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.branch_no",
            "description": "<p>营业部编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.model_name",
            "description": "<p>佣金模板名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FaremodelManagerAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCommissontemplatefromcounter"
  },
  {
    "type": "post / get",
    "url": "/snp/commissonTemplateSync",
    "title": "同步柜台网点到本地",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FareModel",
            "optional": false,
            "field": "branch_nos",
            "description": "<p>营业部编号字符串，用逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "FareModel",
            "optional": false,
            "field": "fare_models",
            "description": "<p>费用模板编号字符串，用逗号分隔</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ifDefaultOK",
            "description": "<p>是否默认设置状态为正常，设置为正常，如果ifDefaultOK等于true</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FaremodelManagerAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCommissontemplatesync",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP0012",
    "title": "CRH-SNP0012-经纪人客户绑定",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>分支机构编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BrokerBaseAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp0012",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1001",
    "title": "CRH-SNP1001-检查该手机号是否可以使用",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1001",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1002",
    "title": "CRH-SNP1002-绑定手机号码",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>绑定MAC复制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP地址</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1002",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1003",
    "title": "CRH-SNP1003-保存用户密码",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>绑定MAC复制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1003",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1004",
    "title": "CRH-SNP1004-保存认证信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Authinfo",
            "optional": false,
            "field": "Authinfo",
            "description": "<p>认证信息</p>"
          },
          {
            "group": "Parameter",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "SnpBrokerinfo",
            "description": "<p>经纪人信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>绑定MAC复制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1004",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1005",
    "title": "CRH-SNP1005-检查渠道名称和渠道短码是否重复",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1005",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1006",
    "title": "CRH-SNP1006-用户渠道申请",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>渠道信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bind_mac",
            "description": "<p>绑定MAC复制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business_flag",
            "description": "<p>业务标志</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1006",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1007",
    "title": "CRH-SNP1007-检查证件号是否已被注册",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_no",
            "description": "<p>证件号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/RegisterFlowAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1007",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1008",
    "title": "CRH-SNP1008-获取用户渠道信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelType",
            "description": "<p>渠道类别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "channelList",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authcode_id",
            "description": "<p>授权码ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authorize_code",
            "description": "<p>授权码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_type",
            "description": "<p>渠道类型  0：开户  1：产品营销</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_bank_no",
            "description": "<p>允许银行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_model",
            "description": "<p>佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>SNP账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_rate",
            "description": "<p>费用比率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ofcommission_occur",
            "description": "<p>开户提成基准金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_codes",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app_url",
            "description": "<p>app下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1008"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1009",
    "title": "CRH-SNP1009-获取渠道对应的佣金范围",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "comQuotaList",
            "description": "<p>渠道佣金提成与交易量对照</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "farebal_no",
            "description": "<p>佣金与交易金额对照号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_commission",
            "description": "<p>佣金提成</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_balance",
            "description": "<p>起始金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_balance",
            "description": "<p>结束金额</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1009"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1010",
    "title": "CRH-SNP1010-获取渠道对应的存管银行",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "bankList",
            "description": "<p>银行配置列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1010"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1011",
    "title": "CRH-SNP1011-获取渠道对应的营业部信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "branchList",
            "description": "<p>分支机构列表</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1011"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1012",
    "title": "CRH-SNP1012-保存或修改渠道信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business_flag",
            "description": ""
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1012",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1013",
    "title": "CRH-SNP1013-获取用户基本信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Users",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.secret_key",
            "description": "<p>秘钥串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bind_mac",
            "description": "<p>绑定地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bind_ip",
            "description": "<p>绑定IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_status",
            "description": "<p>用户状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.login_errors",
            "description": "<p>连续登入失败次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_level",
            "description": "<p>用户级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.curr_datetime",
            "description": "<p>当前时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.ip_address",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.account_content",
            "description": ""
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1013"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1014",
    "title": "CRH-SNP1014-获取用户认证信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Authinfo",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.auth_no",
            "description": "<p>认证编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.auth_date",
            "description": "<p>认证日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.id_kind",
            "description": "<p>证件类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.id_no",
            "description": "<p>证件号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.full_name",
            "description": "<p>用户姓名全程</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.id_address",
            "description": "<p>证件地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.id_begindate",
            "description": "<p>证件开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.id_enddate",
            "description": "<p>证件有效截止日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.nation_id",
            "description": "<p>名族编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.issued_depart",
            "description": "<p>签发机关</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.audit_date",
            "description": "<p>复核日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.image_url",
            "description": "<p>身份证头像</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1014"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1015",
    "title": "CRH-SNP1015-修改用户手机号",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1015",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1016",
    "title": "CRH-SNP1016-修改用户密码",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1016",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1017",
    "title": "CRH-SNP1017-获取经纪人信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "brokerinfo",
            "description": "<p>经纪人信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.wechat_id",
            "description": "<p>微信账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.branch_name",
            "description": "<p>分支名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.organ_flag",
            "description": "<p>机构标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.parent_id",
            "description": "<p>父节点ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.mobile_tel",
            "description": "<p>经纪人手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.e_mail",
            "description": "<p>电子邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.organ_code",
            "description": "<p>组织机构代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.staff_no",
            "description": "<p>员工号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.profession_cert",
            "description": "<p>职业证书号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.company_name",
            "description": "<p>公司名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.web_record",
            "description": "<p>网站备案号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.office_tel",
            "description": "<p>办公电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.duty_name",
            "description": "<p>负责人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.duty_tel",
            "description": "<p>负责人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.qq",
            "description": "<p>qq</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_status",
            "description": "<p>经纪人状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_level",
            "description": "<p>经纪人级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.bank_account",
            "description": "<p>银行账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_type",
            "description": "<p>经纪人类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.marketing_flag",
            "description": "<p>营销标志 0：不可 1：可以</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.source_info",
            "description": "<p>来源</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1017"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1018",
    "title": "CRH-SNP1018-获取所有营业部",
    "group": "snp",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "branchList",
            "description": "<p>所有营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_name",
            "description": "<p>分支名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.up_branch_no",
            "description": "<p>上级分支结构</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_type",
            "description": "<p>营业部类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.province_code",
            "description": "<p>省级代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.city_code",
            "description": "<p>市级代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.region_name",
            "description": "<p>区域</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.zipcode",
            "description": "<p>邮政编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.telephone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.service_phone",
            "description": "<p>客服电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.branch_kpi",
            "description": "<p>营业部绩效考核</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.order_no",
            "description": "<p>权重</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.addr_longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.addr_latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "branchList.csrc_code",
            "description": "<p>证监局代码</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1018"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1019",
    "title": "CRH-SNP1019-修改经纪人信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "SnpBrokerinfo",
            "optional": false,
            "field": "brokerinfo",
            "description": "<p>经纪人信息对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.branch_name",
            "description": "<p>分支名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.organ_flag",
            "description": "<p>机构标志</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.parent_id",
            "description": "<p>父节点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.mobile_tel",
            "description": "<p>经纪人手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.organ_code",
            "description": "<p>组织机构代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.staff_no",
            "description": "<p>员工号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.profession_cert",
            "description": "<p>职业证书号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.company_name",
            "description": "<p>公司名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.web_record",
            "description": "<p>网站备案号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.office_tel",
            "description": "<p>办公电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.duty_name",
            "description": "<p>负责人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.duty_tel",
            "description": "<p>负责人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_status",
            "description": "<p>经纪人状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_level",
            "description": "<p>经纪人级别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.bank_account",
            "description": "<p>银行账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.broker_type",
            "description": "<p>经纪人类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.marketing_flag",
            "description": "<p>营销标志 0：不可 1：可以</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brokerinfo.source_info",
            "description": "<p>来源</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1019",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1020",
    "title": "CRH-SNP1020-修改认证信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.auth_no",
            "description": "<p>认证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.auth_date",
            "description": "<p>认证日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.id_kind",
            "description": "<p>证件类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.id_no",
            "description": "<p>证件号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.full_name",
            "description": "<p>用户姓名全程</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.id_address",
            "description": "<p>证件地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.id_begindate",
            "description": "<p>证件开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.id_enddate",
            "description": "<p>证件有效截止日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.user_gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.nation_id",
            "description": "<p>名族编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.issued_depart",
            "description": "<p>签发机关</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.audit_date",
            "description": "<p>复核日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth.image_url",
            "description": "<p>身份证头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>MAC地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1020",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1021",
    "title": "CRH-SNP1021-前台客户登录接口（非登录）",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_content",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac_address",
            "description": "<p>mac地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_flag",
            "description": "<p>设备标志[1：PC；2：手机；3：pad；4：其他设备]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>ip地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "loginResult",
            "description": "<p>登录成功后返回的用户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/IndexSnpAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1021"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1022",
    "title": "CRH-SNP1022-查询我的收益",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>业务流序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>请求序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>请求序号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "all_income",
            "description": "<p>总收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month_income",
            "description": "<p>月收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year_income",
            "description": "<p>年收益</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "xAxis",
            "description": "<p>横轴数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "yAxis",
            "description": "<p>纵轴数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>分析类别</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "date",
            "description": "<p>月份数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thisYear",
            "description": "<p>当前年份</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thisPercent",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/CommissionStatisticsAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1022"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1023",
    "title": "CRH-SNP1023-查询用户绑定信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bind_no",
            "description": "<p>绑定编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account_type",
            "description": "<p>绑定类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account_content",
            "description": "<p>输入内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BasicInfoAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1023"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1025",
    "title": "CRH-SNP1025-获取审核信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businflow_no",
            "description": "<p>业务流序号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_no",
            "description": "<p>请求序号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "checkInfoMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.open_commission",
            "description": "<p>开户佣金（开户提成）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.ofcommission_occur",
            "description": "<p>开户提成基准金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.en_bank_no",
            "description": "<p>银行编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.channel_validdate",
            "description": "<p>渠道有效期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "checkInfoMap.en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/CheckAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1025"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1026",
    "title": "CRH-SNP1026-获取全部通知公告信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>月份</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resList",
            "description": "<p>通知公告信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_id",
            "description": "<p>系统公告编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_type",
            "description": "<p>通知类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_title",
            "description": "<p>公告标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_content",
            "description": "<p>通知内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_level",
            "description": "<p>消息等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_operator",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_start",
            "description": "<p>有效期开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_end",
            "description": "<p>有效期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_operator",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.subsys_id",
            "description": "<p>子系统编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/MessSysNoticeAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1026"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1027",
    "title": "CRH-SNP1027-通过id获取通知公告信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice_id",
            "description": "<p>消息id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resList",
            "description": "<p>通知公告信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_id",
            "description": "<p>系统公告编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_type",
            "description": "<p>通知类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_title",
            "description": "<p>公告标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_content",
            "description": "<p>通知内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_level",
            "description": "<p>消息等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_operator",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_start",
            "description": "<p>有效期开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_end",
            "description": "<p>有效期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_operator",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.subsys_id",
            "description": "<p>子系统编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/MessSysNoticeAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1027"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1028",
    "title": "CRH-SNP1028-保存或修改渠道信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ChannelInfo",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>渠道信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_id",
            "description": "<p>渠道id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_qrcode",
            "description": "<p>渠道二维码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.snp_fare_model",
            "description": "<p>snp佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.fare_model_name",
            "description": "<p>佣金模版名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.preferred_flag",
            "description": "<p>是否首推 1:首推 0：非首推</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_type",
            "description": "<p>渠道类型  0：开户  1：产品营销</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.open_commission",
            "description": "<p>开户佣金（开户提成）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.effective_commission",
            "description": "<p>有效开户佣金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.branch_name",
            "description": "<p>分支机构名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.broker_count",
            "description": "<p>经纪人个数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo.expiration_date",
            "description": "<p>渠道有效日期</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1028"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1029",
    "title": "CRH-SNP1029-查询用户所有的子账户",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent_id",
            "description": "<p>父节点ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.wechat_id",
            "description": "<p>微信账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.branch_name",
            "description": "<p>分支名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.organ_flag",
            "description": "<p>机构标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.parent_id",
            "description": "<p>父节点ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.mobile_tel",
            "description": "<p>经纪人手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.e_mail",
            "description": "<p>电子邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.organ_code",
            "description": "<p>组织机构代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.address",
            "description": "<p>住址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.staff_no",
            "description": "<p>员工号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.profession_cert",
            "description": "<p>职业证书号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.company_name",
            "description": "<p>公司名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.web_record",
            "description": "<p>网站备案号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.office_tel",
            "description": "<p>办公电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.duty_name",
            "description": "<p>负责人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.duty_tel",
            "description": "<p>负责人手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.qq",
            "description": "<p>qq</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.broker_status",
            "description": "<p>经纪人状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.broker_level",
            "description": "<p>经纪人级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.bank_account",
            "description": "<p>银行账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.bank_name",
            "description": "<p>银行名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.broker_type",
            "description": "<p>经纪人类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.marketing_flag",
            "description": "<p>营销标志 0：不可 1：可以</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.source_info",
            "description": "<p>来源</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BrokerBaseAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1029"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1030",
    "title": "CRH-SNP1030-子账户导入",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "broker_code",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "en_branch_no",
            "description": "<p>允许分支号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/BrokerBaseAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1030",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1031",
    "title": "CRH-SNP1031-渠道产品统计信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ProductCountForm",
            "optional": false,
            "field": "productCountForm",
            "description": "<p>产品购买查看统计</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": "<p>渠道产品统计信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/ProductCountAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1031"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1032",
    "title": "CRH-SNP1032-产品信息获取",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_short_name",
            "description": "<p>产品简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.en_status",
            "description": "<p>允许处理状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.sale_urls",
            "description": "<p>购买链接串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.status_name",
            "description": "<p>状态名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.risk_level_str",
            "description": "<p>风险等级STR</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.upload_status",
            "description": "<p>同步状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.category_name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1032"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1033",
    "title": "CRH-SNP1033-产品分类列表获取",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品代码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_code",
            "description": "<p>产品代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_short_name",
            "description": "<p>产品简称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.description",
            "description": "<p>详细描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.en_status",
            "description": "<p>允许处理状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.sale_urls",
            "description": "<p>购买链接串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.status_name",
            "description": "<p>状态名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.risk_level_str",
            "description": "<p>风险等级STR</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.upload_status",
            "description": "<p>同步状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.category_name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1033"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1035",
    "title": "CRH-SNP1035-用户产品操作记录查询",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capital_account",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>经纪人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>允许分支号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "CrhUser",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "res",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "res.channelProductList",
            "description": "<p>渠道产品信息列表</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "res.channelProductCount",
            "description": "<p>渠道产品信息数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/ChannelProductAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1035"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1036",
    "title": "CRH-SNP1036-产品购买操作记录数据插入",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Clientdealproductjour",
            "optional": false,
            "field": "clientdealproductjour",
            "description": "<p>用户产品流水</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.serial_no",
            "description": "<p>序列号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.snp_account",
            "description": "<p>snp账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.channel_id",
            "description": "<p>渠道ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.product_code",
            "description": "<p>产品编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.capital_account",
            "description": "<p>资金账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.client_name",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.op_flag",
            "description": "<p>操作标志</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.submit_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.consumtrans_id",
            "description": "<p>消费订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.real_amount",
            "description": "<p>实际金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.buy_balance",
            "description": "<p>买入金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.order_status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientdealproductjour.snp_order_status",
            "description": "<p>平台订单状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1036"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1037",
    "title": "CRH-SNP1037-系统业务表信息获取",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>CRH用户信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Businesswayinfo",
            "optional": false,
            "field": "businesswayinfo",
            "description": "<p>业务系统信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.system_no",
            "description": "<p>系统编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.system_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.url",
            "description": "<p>外部访问地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.remark",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.order_num",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.terminal_type",
            "description": "<p>终端类型 01、IOS 02、Android 03、PC 04、WAP 05、微信</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.control_str",
            "description": "<p>控制字段值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Businesswayinfo",
            "optional": false,
            "field": "businesswayinfo",
            "description": "<p>业务系统信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.system_no",
            "description": "<p>系统编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.system_name",
            "description": "<p>系统名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.url",
            "description": "<p>外部访问地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.remark",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.order_num",
            "description": "<p>排序号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.terminal_type",
            "description": "<p>终端类型 01、IOS 02、Android 03、PC 04、WAP 05、微信</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "businesswayinfo.control_str",
            "description": "<p>控制字段值</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1037"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1038",
    "title": "CRH-SNP1038-非登录状态下根据渠道短码获取产品代码和用户id",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.product_code",
            "description": "<p>产品编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.channel_id",
            "description": "<p>渠道ID</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1038"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP1039",
    "title": "CRH-SNP1039-中转渠道跳转链接获取",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "resultMap",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMap.request_message",
            "description": "<p>中转渠道跳转链接</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/OpenTransChannelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp1039"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4101",
    "title": "CRH-SNP4101-绑定经纪关系-保存投资者和渠道的关系",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_investor_id",
            "description": "<p>外部投资者id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "system_no",
            "description": "<p>系统编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/MultiserviceAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp4101",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4102",
    "title": "CRH-SNP4102-获取渠道关联属性信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": "<p>渠道名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_type",
            "description": "<p>渠道类别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snp_account",
            "description": "<p>SNP账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snp_model_no",
            "description": "<p>SNP佣金模版编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel_status",
            "description": "<p>渠道状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_branch_no",
            "description": "<p>允许营业部</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "en_bank_no",
            "description": "<p>允许银行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fare_model_no",
            "description": "<p>佣金模版编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/MultiserviceAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp4102"
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4103",
    "title": "CRH-SNP4103-更新投资者信息-更新投资者信息",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "out_investor_id",
            "description": "<p>外部投资者ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fund_account",
            "description": "<p>资金账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "investor_name",
            "description": "<p>投资者姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>分支编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_date",
            "description": "<p>开户日期</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_time",
            "description": "<p>开户时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "register_way",
            "description": "<p>注册方式</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/MultiserviceAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp4103",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP4104",
    "title": "CRH-SNP4104-保存产品渠道用户操作记录",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Clientdealproductjour",
            "optional": false,
            "field": "clientdealproductjour",
            "description": "<p>用户产品流水</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_code",
            "description": "<p>渠道短码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品编号</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/ProductInterfaceAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp4104",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post / get",
    "url": "/snp/CRH-SNP6026",
    "title": "CRH-SNP6026-获取全部通知公告信息",
    "group": "snp",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "resList",
            "description": "<p>通知公告信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_id",
            "description": "<p>系统公告编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_type",
            "description": "<p>通知类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_title",
            "description": "<p>公告标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_content",
            "description": "<p>通知内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.notice_level",
            "description": "<p>消息等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_datetime",
            "description": "<p>创建日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.create_operator",
            "description": "<p>创建人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_start",
            "description": "<p>有效期开始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.effective_end",
            "description": "<p>有效期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_datetime",
            "description": "<p>更新日期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.update_operator",
            "description": "<p>修改人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.subsys_id",
            "description": "<p>子系统编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resList.status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/mobile/APP_RotationChartAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpCrhSnp6026"
  },
  {
    "type": "post / get",
    "url": "/snp/getOpenFailList",
    "title": "未成功开户查询",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "OpenFailForm",
            "optional": false,
            "field": "form",
            "description": "<p>OpenFailForm对象</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页长度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>mac地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List[OpenFailForm]",
            "optional": false,
            "field": "openFailForms",
            "description": "<p>开户失败用户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/InvestorInfoManagerAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpGetopenfaillist"
  },
  {
    "type": "post / get",
    "url": "/snp/queryBranchByFareModel",
    "title": "根据Snpcountmodelrelation查询营业部列表",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Snpcountmodelrelation",
            "optional": false,
            "field": "snpcountmodelrelation",
            "description": "<p>snpcountmodelrelation对象</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List[Allbranch]",
            "optional": false,
            "field": "branchList",
            "description": "<p>营业部列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FareModelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpQuerybranchbyfaremodel"
  },
  {
    "type": "post / get",
    "url": "/snp/queryFareModelByBranch",
    "title": "根据营业部编号查询Snpfaremodel列表",
    "group": "snp",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_no",
            "description": "<p>营业部编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List[Snpfaremodel]",
            "optional": false,
            "field": "modelList",
            "description": "<p>Snpfaremodel列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FareModelAction.java",
    "groupTitle": "snp",
    "name": "Post___getSnpQueryfaremodelbybranch"
  },
  {
    "type": "post / get",
    "url": "/snp/queryAllFareModel",
    "title": "查询所有Snpfaremodel对象集合",
    "name": "______",
    "group": "snp",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List[Snpfaremodel]",
            "optional": false,
            "field": "noname",
            "description": "<p>(无返回结果名称，直接返回查询list)返回所有有效状态的Snpfaremodel列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_no",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>返回提示信息</p>"
          }
        ]
      }
    },
    "filename": "E:/data/codeStationTest/xpe-products-snp/xpe-products-snp-backend/src/main/java/com/cairh/xpe/snp/backend/action/FareModelAction.java",
    "groupTitle": "snp"
  }
] });