const decisionTree = {
  startId: "q_age",
  nodes: {
    // STEP 1: Age / Living situation
    q_age: {
      id: "q_age",
      type: "yesno",
      prompt: "Are you 24 years or older?",
      yes: "out_auto_independent_24plus",
      no: "q_current_hs"
    },

    q_current_hs: {
      id: "q_current_hs",
      type: "yesno",
      prompt: "Are you currently in public high school?",
      yes: "q_identified_hs_current",
      no: "q_graduated_recent"
    },

    // Branch for current high school students
    q_identified_hs_current: {
      id: "q_identified_hs_current",
      type: "yesno",
      prompt:
        "Have you been identified as an [tooltip:unaccompanied:not living with a parent or guardian] homeless youth by a high school counselor, McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison], or other high school staff?",
      yes: "out_hs_determination_letter",
      no: "q_hs_staff_know"
    },

    q_hs_staff_know: {
      id: "q_hs_staff_know",
      type: "yesno",
      prompt:
        "Does a McKinney-Vento homeless [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or do other high school staff know you are [tooltip:unaccompanied:you don't live with your parents] and homeless?",
      yes: "out_hs_become_identified",
      no: "q_live_with_parents"
    },

    // Branch for recent graduates
    q_graduated_recent: {
      id: "q_graduated_recent",
      type: "yesno",
      prompt: "Did you graduate from a public high school in the last year?",
      yes: "q_identified_hs_grad",
      no: "q_live_with_parents"
    },

    q_identified_hs_grad: {
      id: "q_identified_hs_grad",
      type: "yesno",
      prompt:
        "While you were in high school, were you identified as an [tooltip:unaccompanied:not living with a parent or guardian] homeless youth by a high school counselor, McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison], or other high school staff?",
      yes: "out_hs_determination_letter",
      no: "q_live_with_parents"
    },

    q_live_with_parents: {
      id: "q_live_with_parents",
      type: "yesno",
      prompt: "Do you live with your parents?",
      yes: "out_fafsa_parent",
      no: "q_temp_since_july"
    },

    // Since July 1 questions
    q_temp_since_july: {
      id: "q_temp_since_july",
      type: "yesno",
      prompt:
        "Since July 1 of the previous school year, have you had to stay somewhere temporarily because you didn't have anywhere else to go?\n\nFor example:\n• Staying with friends or relatives because you lost housing or couldn't afford rent\n• \"Couch surfing\" or moving from place to place\n• Living in residence halls/dorms but you would otherwise have no safe place to go",
      yes: "q_can_someone_confirm",
      no: "q_not_meant_for_living"
    },

    q_not_meant_for_living: {
      id: "q_not_meant_for_living",
      type: "yesno",
      prompt:
        "Since July 1 of the previous school year, have you stayed in a place not meant for people to live?\n\nFor example:\n• A motel or hotel because you had no other housing\n• A trailer park, campground, car, park, or abandoned building",
      yes: "q_can_someone_confirm",
      no: "q_at_risk"
    },

    q_at_risk: {
      id: "q_at_risk",
      type: "yesno",
      prompt:
        "Are you at risk of losing your housing soon or not having a safe place to stay?\n\nFor example:\n• Being told you can't stay where you are much longer\n• Having a pending eviction\n• Not knowing where you'll sleep next week or next month",
      yes: "q_pay_all_expenses",
      no: "q_dep_support_from_parents"
    },

    q_pay_all_expenses: {
      id: "q_pay_all_expenses",
      type: "yesno",
      prompt:
        "Do you pay for all of your own expenses, including your housing? (Only answer “Yes” if you do not receive any financial support from anyone.)",
      yes: "q_can_someone_confirm",
      no: "q_dep_support_from_parents"
    },

    // SECTION 2: UHY (Not through HS)
    q_can_someone_confirm: {
      id: "q_can_someone_confirm",
      type: "yesno",
      prompt:
        "Can any of the following individuals confirm your situation?\n• A high school McKinney-Vento [helplink:liaison:https://schoolhouseconnection.org/homeless-education-directory:Find your liaison] or their designee (e.g., a school counselor)\n• The director (or designee) of a shelter, drop-in center, or other program serving individuals experiencing homelessness\n• The director (or designee) of a TRIO or GEAR UP program\n• Financial aid administrator at current college/university or your previous college/university who previously made a determination",
      yes: "out_third_party_determination",
      no: "q_still_staying_temp"
    },

    q_still_staying_temp: {
      id: "q_still_staying_temp",
      type: "yesno",
      prompt:
        "As of today, are you staying in one of the following situations?\n\n• Staying with friends or relatives (like an aunt or uncle) because you lost housing or couldn't afford rent\n• \"Couch surfing\" or moving from place to place\n• Living in residence halls/dorms but would otherwise have no place to go\n• A motel or hotel because you had no other housing\n• A trailer park, campground, car, park, or abandoned building\n• At risk of losing your housing soon",
      yes: "out_faa_determination_uhy",
      no: "q_dep_support_from_parents"
    },

    // STEP 3 / DEPENDENCY OVERRIDE
    q_dep_support_from_parents: {
      id: "q_dep_support_from_parents",
      type: "yesno",
      prompt: "Do you receive any financial support from either of your parents?",
      yes: "out_dependent_parent_info",
      no: "q_dep_contact_with_parents"
    },

    q_dep_contact_with_parents: {
      id: "q_dep_contact_with_parents",
      type: "yesno",
      prompt: "Do you have contact with your parents?",
      yes: "out_likely_dependent_contact_faa",
      no: "q_dep_abuse_or_unknown"
    },

    q_dep_abuse_or_unknown: {
      id: "q_dep_abuse_or_unknown",
      type: "yesno",
      prompt:
        "Do any of the following apply?\n• You do not know where your parents are or how to contact them\n• You left home due to an abusive or unsafe situation\n• Your parents are incarcerated or institutionalized",
      yes: "out_may_qualify_dependency_override",
      no: "out_likely_dependent_contact_faa"
    },

    // OUTCOMES

    // Age-based automatic independence
    out_auto_independent_24plus: {
      id: "out_auto_independent_24plus",
      type: "outcome",
      title: "You are automatically considered an independent student",
      body:
        "Because you are 24 or older, you are automatically considered an independent student for FAFSA purposes. You should submit the FAFSA without parental information. Only use your own information (and your spouse’s, if you are currently married).",
      actions: [
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
      ]
    },

    // Reused but updated: complete FAFSA with parent info
    out_fafsa_parent: {
      id: "out_fafsa_parent",
      type: "outcome",
      title: "Complete the FAFSA with parental information",
      body:
        "Based on your answers, you are considered a dependent student and should submit the FAFSA including your parents’ information.",
      actions: [
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
      ]
    },

    // HS-identified UHY – request letter
    out_hs_determination_letter: {
      id: "out_hs_determination_letter",
      type: "outcome",
      title: "Request a determination letter from your high school",
      body:
        "You were identified as an unaccompanied homeless youth by your high school. Contact your McKinney-Vento liaison or high school counselor and request a written determination letter stating that you are (or were) an unaccompanied homeless youth. First, submit the FAFSA as an independent student, without parent information, and then give this documentation to your financial aid office.",
      actions: [
        {
          label: "Find your McKinney-Vento liaison",
          href: "https://schoolhouseconnection.org/homeless-education-directory"
        },
        {
          label: "Sample determination letters",
          href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
        },
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
      ]
    },

    // HS staff know, but student not yet identified
    out_hs_become_identified: {
      id: "out_hs_become_identified",
      type: "outcome",
      title: "Talk to your high school about being identified under McKinney-Vento",
      body:
        "Because your high school staff know about your homelessness, contact your McKinney-Vento liaison or school counselor to be formally identified as homeless under the McKinney-Vento Act. Once identified, you can request a determination letter as an unaccompanied homeless youth to give to your financial aid office.",
      actions: [
        {
          label: "Find your McKinney-Vento liaison",
          href: "https://schoolhouseconnection.org/homeless-education-directory"
        },
        {
          label: "Sample determination letters",
          href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
        },
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
      ]
    },

    // UHY (not through HS) – third party determination
    out_third_party_determination: {
      id: "out_third_party_determination",
      type: "outcome",
      title: "Ask a program or liaison to provide a determination",
      body:
        "Someone who knows your situation (such as a McKinney-Vento liaison, shelter or program director, TRIO/GEAR UP staff, or a financial aid administrator) can provide a written determination that you are an unaccompanied homeless youth. First, submit the FAFSA as an independent student, without parent information, and then give this documentation to your financial aid office.",
      actions: [
        {
          label: "Sample determination letters",
          href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
        },
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
      ]
    },

    // UHY – need FAA determination
    out_faa_determination_uhy: {
      id: "out_faa_determination_uhy",
      type: "outcome",
      title: "Request a determination from your financial aid office",
      body:
        "Because you are in a homeless or at-risk-of-homelessness situation and don’t have another person who can document it, contact your school’s financial aid office and request a determination as an unaccompanied homeless youth. They may ask you some questions or request a written statement from you about your situation.",
      actions: [
        
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
        { label: "How to answer FAFSA questions", href: "https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness" }
      ]
    },

    // Dependency override – clearly dependent
    out_dependent_parent_info: {
      id: "out_dependent_parent_info",
      type: "outcome",
      title: "You are a dependent student for FAFSA",
      body:
        "You are considered a dependent student for FAFSA purposes and will need to report your parents’ information on the FAFSA.",
      actions: [
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
        { label: "How to answer FAFSA questions", href: "__FAFSA_GUIDE_URL__" }
      ]
    },

    // Dependency override – likely dependent, but talk to FA
    out_likely_dependent_contact_faa: {
      id: "out_likely_dependent_contact_faa",
      type: "outcome",
      title: "You will most likely be considered a dependent student",
      body:
        "Based on your answers, you will most likely be considered a dependent student and will need to include your parents’ information on the FAFSA. If you have unusual circumstances that prevent you from reporting parent information, contact your school's financial aid office and explain your situation.",
      actions: [
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
        { label: "How to answer FAFSA questions", href: "https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness" }
      ]
    },

    // Dependency override – may qualify
    out_may_qualify_dependency_override: {
      id: "out_may_qualify_dependency_override",
      type: "outcome",
      title: "You may qualify for a dependency override",
      body:
        "Answer \"yes\" to the question on the FAFSA asking if any unusual circumstances prevent you from reporting parent information. This will let you submit the FAFSA as an independent student. You will need to follow up with your school's financial aid office. They will need a statement from you about your circumstances, and will likely need signed statements from people who know you and can confirm your situation.\n\nNote that the following circumstances on their own do not qualify for a dependency override:\n\n• You do not live with your parents\n• You are financially self-sufficient\n• Your parents do not claim you on their taxes\n• Your parents are not helping with college expenses\n• Your parents do not want to provide their information or they refuse to submit the FAFSA",
  
      actions: [
        { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
        { label: "How to answer FAFSA questions", href: "__FAFSA_GUIDE_URL__" }
      ]
    }
  }
};

export default decisionTree;
