(ns deskapp.main
  (:require [reagent.core :as r]))

(defn init! []
      (.log js/console "Hello from shadow-cljs!"))

(init!)
